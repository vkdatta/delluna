export const name="numpad-thin";
export const id="dl_5069f2ecfd594b70a5ad";
export const url=new URL("../icons/numpad-thin.svg?v=d9693c4dca641443bd504e441667038bc040639a932a2456b2ab28378f68e5b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
