export const name="textbox-fill";
export const id="dl_d4e912971ece445cbe68";
export const url=new URL("../icons/T/textbox-fill.svg?v=aecf99dd2b20db023c0d06118414f30881a6261d2a687f0829296f4c0d9c613b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
