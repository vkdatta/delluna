export const name="confetti";
export const id="dl_f6b1a86277b74696a326";
export const url=new URL("../icons/confetti.svg?v=e5e02c3df18abf1f8a910227c82ca109f7dfc5cff4b2340aee6cd3f5b7d90761",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
