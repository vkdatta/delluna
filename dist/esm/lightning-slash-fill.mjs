export const name="lightning-slash-fill";
export const id="dl_6cee9b0882b543128bbb";
export const url=new URL("../icons/lightning-slash-fill.svg?v=a8ab51ef4b00065d729f65c9a69713afb6870c001bda95dee23d00b006f4306b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
