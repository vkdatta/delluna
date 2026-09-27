export const name="spray-bottle-thin";
export const id="dl_9b291fd6be98d9a94820";
export const url=new URL("../icons/spray-bottle-thin.svg?v=10fe9727719df552dd2676ea018d147682e2abac6dc5637192566a2ec56c5eb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
