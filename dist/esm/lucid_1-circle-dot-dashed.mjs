export const name="lucid_1-circle-dot-dashed";
export const id="dl_5e4c5c6df8b148528bc3";
export const url=new URL("../icons/lucid_1-circle-dot-dashed.svg?v=5683ac7cfe5ca7f23d36cbd1e859600eca296a5d3031d2ef96c16aff8ca37d93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
