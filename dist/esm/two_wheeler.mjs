export const name="two_wheeler";
export const id="dl_98e87284f153ae8f0e7e";
export const url=new URL("../icons/two_wheeler.svg?v=96eaeee4aa6c0efacd74b82d359d89d61ba9bee7ca8fd2858c5dc391d48ce430",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
