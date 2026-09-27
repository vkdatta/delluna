export const name="arrow-fat-line-left-fill";
export const id="dl_eded1dd8d06c4ad492c4";
export const url=new URL("../icons/arrow-fat-line-left-fill.svg?v=9428cfc7ba0ef5b5224053eae9905197570dca9eaee8a3cf6b1dc825977b0fe4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
