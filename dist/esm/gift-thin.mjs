export const name="gift-thin";
export const id="dl_a003b64c76d84b8ebab7";
export const url=new URL("../icons/gift-thin.svg?v=6fa495fac1fa16fa7b6332c24b89e663bc32152ab0f9634a960664c0b8ef0c47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
