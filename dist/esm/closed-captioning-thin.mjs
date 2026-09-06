export const name="closed-captioning-thin";
export const id="dl_d9c48d2d851047e0bf1e";
export const url=new URL("../icons/closed-captioning-thin.svg?v=abb69e88fff1c607bdabcb18ddc48ea6be60574fe1d667b7288a4edf0dd2f292",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
