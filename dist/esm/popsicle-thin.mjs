export const name="popsicle-thin";
export const id="dl_a2d0be00aae5408989cb";
export const url=new URL("../icons/popsicle-thin.svg?v=63db3c3cccdee01f13f0c45f9d7cb4cbe11a09e1c091ce6396a8542e0e65683c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
