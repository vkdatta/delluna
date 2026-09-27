export const name="boat-thin";
export const id="dl_b024fc8772ae4550a1cb";
export const url=new URL("../icons/boat-thin.svg?v=5f5e9f748139467cae192943434e846d7d8f4063669ad629480c3337748d8b83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
