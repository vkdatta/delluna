export const name="place_item-fill";
export const id="dl_c667388db26f562ff645";
export const url=new URL("../icons/place_item-fill.svg?v=5722754e707afe8dd12124366673b248ad986038031d305a6de87a66c100bfb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
