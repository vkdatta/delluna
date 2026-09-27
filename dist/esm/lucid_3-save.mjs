export const name="lucid_3-save";
export const id="dl_5dc324380cf24942bd7f";
export const url=new URL("../icons/lucid_3-save.svg?v=8f31a3d37e52cbf9c8754d3862fd8c906e3cece1bead7ccb5d998794792a8e62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
