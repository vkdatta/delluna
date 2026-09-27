export const name="lucid_2-flashlight-off";
export const id="dl_780c3a89999f4161b138";
export const url=new URL("../icons/lucid_2-flashlight-off.svg?v=f39b9a73a7e096fa7a57269ed04f7f5ffaf0362eb1fd9846ba9ed890336c3848",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
