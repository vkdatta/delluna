export const name="battery-charging-vertical-bold";
export const id="dl_b581ae16f66348c89aa3";
export const url=new URL("../icons/battery-charging-vertical-bold.svg?v=c97b969140fd9a881903c89737fe257a9dba7bc1d9b15b7fa5deeaef56a917a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
