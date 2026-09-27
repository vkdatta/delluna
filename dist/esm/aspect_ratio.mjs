export const name="aspect_ratio";
export const id="dl_47b107c5310fce6db28e";
export const url=new URL("../icons/aspect_ratio.svg?v=69886e994b6400bfe1c8e1f8e2ee330882a5c01f1df417fc5cbd5620b3049309",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
