export const name="linux-logo-bold";
export const id="dl_ab5a5bf23cd14449a6c9";
export const url=new URL("../icons/linux-logo-bold.svg?v=27260251d246705c6addacb685c33083d097680d2dab88d8e2e530e4aa0bc955",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
