export const name="handbag-simple-duotone";
export const id="dl_54281810d85d40ada986";
export const url=new URL("../icons/handbag-simple-duotone.svg?v=cde214d7fb5cc0dc72459df72d3aaf2a66a72bf20a80e6416e395276642054e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
