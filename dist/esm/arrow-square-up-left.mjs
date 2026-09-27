export const name="arrow-square-up-left";
export const id="dl_a8f1fea54774477fb7b2";
export const url=new URL("../icons/arrow-square-up-left.svg?v=378992f20045f86dcb9fdb035881522e0f0fc122db6f8d9d108fcd77c0deedf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
