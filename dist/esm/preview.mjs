export const name="preview";
export const id="dl_7c9c8545de106ba929d7";
export const url=new URL("../icons/preview.svg?v=26f02f536db03de93499154ccbbae0c72f6c8334ca9106eb4abeec5ec5b5cf0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
