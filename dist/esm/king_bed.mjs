export const name="king_bed";
export const id="dl_3b67158aa56cc6c61059";
export const url=new URL("../icons/king_bed.svg?v=a8328485c9284e88db70323062a6f0cf2c86ae0a51b38612e205aba7339a7de9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
