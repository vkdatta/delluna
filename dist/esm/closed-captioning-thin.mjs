export const name="closed-captioning-thin";
export const id="dl_d9c48d2d851047e0bf1e";
export const url=new URL("../icons/closed-captioning-thin.svg?v=6d609afb66f9e5c48f2ec59d99b571525d2454298c7ebdb8271767824feafebd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
