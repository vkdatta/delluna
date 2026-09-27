export const name="square_circle-fill";
export const id="dl_47f2924df785ef6a4870";
export const url=new URL("../icons/square_circle-fill.svg?v=8deef8ae6f7d69b0b73b8e3c9e7ab00746fc55a900d99cf5a3d7bf95184f5f3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
