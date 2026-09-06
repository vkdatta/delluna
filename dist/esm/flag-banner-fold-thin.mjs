export const name="flag-banner-fold-thin";
export const id="dl_2db1409eceba4378a922";
export const url=new URL("../icons/flag-banner-fold-thin.svg?v=641f883472a66b6b4751c5d1d3c45b0b0047c24031d470fa4cffdbb40a6e2abf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
