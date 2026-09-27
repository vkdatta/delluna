export const name="paper-plane-bold";
export const id="dl_f2fc7b1a72d044cea43b";
export const url=new URL("../icons/paper-plane-bold.svg?v=715fbaf14344e02f1e4970a9b78eae5cc5f34dd08847dd91fea2f62aa707e77b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
