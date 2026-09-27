export const name="airplane-thin";
export const id="dl_007b1301cc3649008760";
export const url=new URL("../icons/airplane-thin.svg?v=0b0ca9b31fdaa8ccde66bb7324d37d0f7bac835cd09e5aaaafcfaf82d35509fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
