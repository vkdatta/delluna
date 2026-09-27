export const name="siren_check";
export const id="dl_451d50ddb02790aa866d";
export const url=new URL("../icons/siren_check.svg?v=5bde7abc05c3d3b773775f91df259c4cc2023b15b8d7b44043394ba3cdf71edc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
