export const name="lucid_1-cloud-snow";
export const id="dl_b481140de0f943ba9e5b";
export const url=new URL("../icons/lucid_1-cloud-snow.svg?v=44c0d27e43e9353c438f548d306d4982991d091efa688075cadd86d38f4d001b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
