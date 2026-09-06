export const name="bag-simple";
export const id="dl_d3ef483e61174290b03f";
export const url=new URL("../icons/bag-simple.svg?v=bca1823df1a5a44da6a0e33c7bb37d029a213aa0f48e39a434806752e7e6ef5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
