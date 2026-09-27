export const name="file-md-duotone";
export const id="dl_29b753b65408441a8703";
export const url=new URL("../icons/file-md-duotone.svg?v=54de8fba8082e8ba1982b6b338a7e26f77868be161459d3721797bb1edc53eaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
