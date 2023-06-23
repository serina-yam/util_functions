/** 返却ステータス定義（API側で定義している値と同じ）. **/
const RESPONSE_OK="0"
const RESPONSE_INPUT_ERROR="1"
const RESPONSE_NO_DATA="2"
const RESPONSE_NG="9"

/****************************************************************
 * @summary 取込処理（onClick）
 ****************************************************************/
function handleInputFileEvent() {
    // .when()、.done() の順で実行される
    // .when()の返却値を.done() の引数で受け取って処理
    $.when(ajaxFetchInputFile()).done(function(res) {
        // --- ▼ resにstatus定義されている場合の例 ▼ ---
        if (res.status == RESPONSE_OK) {
            // 成功したときの処理
        } else {
            // 失敗したときの処理
        }
        // --- ▲ resにstatus定義されている場合の例 ▲ ---
    }).fail(function(XMLHttpRequest, status, errorThrown) {
        // エラーが発生したときの処理
        return;
    });
}

/****************************************************************
 * @summary 取込処理
 ****************************************************************/
function ajaxFetchInputFile() {

	//データ取得
    let cdLogin = '';
    let authToken = '';
	let uploadfile = $('#fileName')[0].files[0];

    // データセット
    let formData = new FormData();
    formData.append("cdLogin" , cdLogin);
    formData.append("authToken" , encodeURIComponent(authToken));
    formData.append("uploadFile" , uploadfile);

	let url = "/hss/api/importXXXX";
	return getAjaxFormData(formData, url);
}

/****************************************************************
 * @summary 共通処理Ajax通信 formdata
 * @param {Object} formData formdata
 * @param {String} actionUrl URL
 * @return 通信結果
 ****************************************************************/
function getAjaxFormData(formData, actionUrl) {
	return $.ajax({
			type: "POST",
			url: actionUrl,
			enctype: 'multipart/form-data',
			data: formData,
			processData: false,
			contentType: false
	});
}