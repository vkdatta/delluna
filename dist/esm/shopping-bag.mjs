export const name="shopping-bag";
export const id="dl_9036b46d2a37a551bc33";
export const url=new URL("../icons/shopping-bag.svg?v=84ca4f3773a0d1ee660028fc57163e1a886a62761d743a1784452f89080dc19e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
