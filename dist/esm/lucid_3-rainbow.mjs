export const name="lucid_3-rainbow";
export const id="dl_ba14e86e8c4f48bcbde9";
export const url=new URL("../icons/lucid_3-rainbow.svg?v=2e57506077ba79d4b800cdba07e3aeceac4683fa909ed0103f8cdcaf7ff81161",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
