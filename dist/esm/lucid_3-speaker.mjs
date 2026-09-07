export const name="lucid_3-speaker";
export const id="dl_b5bba228384846679c0f";
export const url=new URL("../icons/lucid_3-speaker.svg?v=ab403bd0d38885e4645b1e19114ed1daddc479cda22cf093f49b70027e3d520a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
