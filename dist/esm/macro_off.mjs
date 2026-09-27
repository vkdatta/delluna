export const name="macro_off";
export const id="dl_2c638d5753adbe78d5f5";
export const url=new URL("../icons/macro_off.svg?v=0a05ec398fbbb1d72261cefef9cd6cf1a97109a83cee8de0fcdc4088f1dd5b03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
