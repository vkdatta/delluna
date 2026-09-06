export const name="lucid_3-rectangle-vertical";
export const id="dl_b2964954e7b04c09b372";
export const url=new URL("../icons/lucid_3-rectangle-vertical.svg?v=1f3c9f74a8acc1eef427730cb5aa0dd9c8e8c6a442cf4b018f659b8da590a1a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
