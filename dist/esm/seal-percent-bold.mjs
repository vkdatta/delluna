export const name="seal-percent-bold";
export const id="dl_b9ace2f0cdd543c5b973";
export const url=new URL("../icons/S/seal-percent-bold.svg?v=0b54a0a59e9fe945e2d223e7b9d8b1e4889de021c1feecfa1b77773d5e20aee1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
