export const name="number-three";
export const id="dl_006ed3b6eeb444699ba6";
export const url=new URL("../icons/number-three.svg?v=79ddec7a57a92ef2cbb5a5adb38a6be1fd47731f83f8a2cee71a709d62803613",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
