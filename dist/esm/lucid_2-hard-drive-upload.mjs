export const name="lucid_2-hard-drive-upload";
export const id="dl_0b5a2ab91426412990e9";
export const url=new URL("../icons/lucid_2-hard-drive-upload.svg?v=93660b8539573efeb8b9ebd04973b4b916f125f60fa781f9552dbba7ed23c384",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
