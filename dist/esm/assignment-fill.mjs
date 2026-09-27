export const name="assignment-fill";
export const id="dl_57f8af1b16609e416500";
export const url=new URL("../icons/assignment-fill.svg?v=acfe2c90f79d7448709607e5a338b6d4d33a0f25636540533c74496a42bd7ae8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
