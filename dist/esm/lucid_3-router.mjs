export const name="lucid_3-router";
export const id="dl_e31df08499634d6ca69b";
export const url=new URL("../icons/lucid_3-router.svg?v=22984b54c23c2217c4570fa870d6ba982154dc5b97051b2ed0b39f72f5716719",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
