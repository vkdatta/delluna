export const name="spinner-gap";
export const id="dl_46625fb8419342b8c8c1";
export const url=new URL("../icons/spinner-gap.svg?v=0cbca00fb4565945396e9d6af3e8026e5f9b84b01455d2c3d3ff9cea97d4ad1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
