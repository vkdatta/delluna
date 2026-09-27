export const name="local_florist-fill";
export const id="dl_877e991a9e7f436f937c";
export const url=new URL("../icons/local_florist-fill.svg?v=7af3d7cea0051cc41a97d2e0dae3ae2fb489c6c3435377bd9b99d8e5ef099fad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
