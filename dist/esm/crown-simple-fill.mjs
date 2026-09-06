export const name="crown-simple-fill";
export const id="dl_047d3df0bd4241dab4a0";
export const url=new URL("../icons/crown-simple-fill.svg?v=bda9527688e13fc9dd92364c163d7cc91acf475af4408d3a85821eac36599d24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
