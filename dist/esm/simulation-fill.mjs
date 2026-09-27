export const name="simulation-fill";
export const id="dl_e3300387b2fc9fc84845";
export const url=new URL("../icons/simulation-fill.svg?v=2ae96267519d19eda5972c4090f7942f9897ec40af0dc622fd8afde744b04ce0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
