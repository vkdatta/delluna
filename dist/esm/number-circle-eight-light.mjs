export const name="number-circle-eight-light";
export const id="dl_0f45b3466e3b47269459";
export const url=new URL("../icons/number-circle-eight-light.svg?v=de08132e495f20b1b39f6534873878458c604c7925dd899d5834ef1aace4df7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
