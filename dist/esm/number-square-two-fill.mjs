export const name="number-square-two-fill";
export const id="dl_c57004296d1c48f19d95";
export const url=new URL("../icons/number-square-two-fill.svg?v=4dce28c0146828c291292e7ec79fad9702dc1b00afc89fca17a3cbc71910674c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
