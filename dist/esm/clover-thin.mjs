export const name="clover-thin";
export const id="dl_7a6e50e2bc3847ac8a22";
export const url=new URL("../icons/clover-thin.svg?v=cc3c90e86f26b086b8f64929d19bfa1af2feab4c5da0bf4d5ee227f380fcf981",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
