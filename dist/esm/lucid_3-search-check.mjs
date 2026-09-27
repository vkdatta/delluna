export const name="lucid_3-search-check";
export const id="dl_9c821b2da72d40a4b00f";
export const url=new URL("../icons/lucid_3-search-check.svg?v=b8136c9e85bd014bb34b46c53adf5658501fc3fec742fb6aa91cdf42c6109c69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
