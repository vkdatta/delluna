export const name="sun-dim-duotone";
export const id="dl_637c88ca57641b853c01";
export const url=new URL("../icons/sun-dim-duotone.svg?v=358067bd9af21950b0722815ff7f612f9e245b74dca81555fa3083460c638553",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
