export const name="star-check";
export const id="dl_2d479755179b4b08b767";
export const url=new URL("../icons/star-check.svg?v=07339069e99688a2c2c78b0d10a53e846bd56b45bce4f879a623f3652658ddc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
