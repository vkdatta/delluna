export const name="steam-logo-duotone";
export const id="dl_76fff952a5f383b28dcc";
export const url=new URL("../icons/steam-logo-duotone.svg?v=2e16abe25e194da09b3d1d637644c39819772bb1108b74606e527aae21ddbf3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
