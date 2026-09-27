export const name="beer-bottle-duotone";
export const id="dl_b8878617b55a4f94b70d";
export const url=new URL("../icons/beer-bottle-duotone.svg?v=7f832c18e5cff92d1c00f8bc45510ba168e8bf14e7895a2a6d772365c0d55454",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
