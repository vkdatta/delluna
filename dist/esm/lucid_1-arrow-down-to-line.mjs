export const name="lucid_1-arrow-down-to-line";
export const id="dl_b67871f543934956a771";
export const url=new URL("../icons/lucid_1-arrow-down-to-line.svg?v=90c331c32eb7fabde8d5f9fca1c5afeae39400bf6af5d124208ad227c3534f20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
