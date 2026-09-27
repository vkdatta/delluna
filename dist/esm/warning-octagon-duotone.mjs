export const name="warning-octagon-duotone";
export const id="dl_ac4683385dce1a7125b2";
export const url=new URL("../icons/warning-octagon-duotone.svg?v=e12fa590e6ca3259b60427a0d779a6a8c0e100c2e4c7704b92ddeddce40ec487",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
