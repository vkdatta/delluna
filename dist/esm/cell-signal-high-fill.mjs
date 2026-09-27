export const name="cell-signal-high-fill";
export const id="dl_6ba2ddbdc0484b7fb5a4";
export const url=new URL("../icons/cell-signal-high-fill.svg?v=c100ae4939fc92ff2a7038466afd9bcc238e0f64e80797cbad603695e3c31903",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
