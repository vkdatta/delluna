export const name="lucid_3-rectangle-ellipsis";
export const id="dl_4aeb35f4037e4cec93d5";
export const url=new URL("../icons/lucid_3-rectangle-ellipsis.svg?v=10b4892cbcef76350faad65084f84c5a38d14c74c0187833e83b7ecd14387d43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
