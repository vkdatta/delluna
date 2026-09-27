export const name="bath_outdoor-fill";
export const id="dl_a403361e50516fa16c86";
export const url=new URL("../icons/bath_outdoor-fill.svg?v=1441f9622b4a53a83a5844ca1752fe12415fa78cc766afef0ae0a441da4334d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
