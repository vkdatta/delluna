export const name="stop-circle-thin";
export const id="dl_0f6b2517ebc44d791a42";
export const url=new URL("../icons/stop-circle-thin.svg?v=6e5dbb13104dcf4e768d3867afef3d380d89b2d14de42c091e21725e82ff5363",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
