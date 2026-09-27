export const name="hourglass_bottom-fill";
export const id="dl_29a7330d3d2a93329a4b";
export const url=new URL("../icons/hourglass_bottom-fill.svg?v=68386ee7fff5ddbf69e0b92ad2d5194f279f1d131c29ece2b78e9d5be9e4ae28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
