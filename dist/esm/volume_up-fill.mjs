export const name="volume_up-fill";
export const id="dl_7d55d52547d418d65adf";
export const url=new URL("../icons/volume_up-fill.svg?v=2d217612eec43be52c0531542fe53886929326c4d6986c24effbe5ff5a3fe654",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
