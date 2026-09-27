export const name="lucid_1-cloud-snow";
export const id="dl_b481140de0f943ba9e5b";
export const url=new URL("../icons/lucid_1-cloud-snow.svg?v=dfebeac4952d7b753491ac458ad9404da7eac6f8e8139bfff6c7b5f546231265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
