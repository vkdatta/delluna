export const name="tapas-fill";
export const id="dl_7ac0f69f2470a3a6aded";
export const url=new URL("../icons/tapas-fill.svg?v=f3a31b74952b750d3a0124679f933d0a75c5d8c0d02d16d2ee239932884c60e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
