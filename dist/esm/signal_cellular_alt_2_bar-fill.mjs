export const name="signal_cellular_alt_2_bar-fill";
export const id="dl_746237b124360a8b96e0";
export const url=new URL("../icons/signal_cellular_alt_2_bar-fill.svg?v=b2a05a44851939bea3baaf929ebd0d694f2da4ecdc9ec1cc25f6cdbde1da3cc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
