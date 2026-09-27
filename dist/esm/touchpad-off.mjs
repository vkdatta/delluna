export const name="touchpad-off";
export const id="dl_1601aa1441be4d8c9217";
export const url=new URL("../icons/touchpad-off.svg?v=c7d98f25492046cbffa24b3ea5cf0172b607138b96cf443324aa3c08ee087102",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
