export const name="cloud-slash";
export const id="dl_bc85c8d0e7b440968fe3";
export const url=new URL("../icons/cloud-slash.svg?v=23fb09ad9f89341af151eb9ec791fa21d3e644e560797cd7843ca86459f70ac8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
