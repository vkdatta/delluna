export const name="ads_click-fill";
export const id="dl_a9e981de45b9247b19dc";
export const url=new URL("../icons/ads_click-fill.svg?v=d836aef048ecc30bd4c722bb455d7e919390b65171d53ef3fb1a3908591e1eaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
