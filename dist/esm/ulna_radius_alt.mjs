export const name="ulna_radius_alt";
export const id="dl_22f4f97be97b71f5a307";
export const url=new URL("../icons/ulna_radius_alt.svg?v=140d876b5c3c552565448b4cf344a263d429b987ba203217d836741e6668c15a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
