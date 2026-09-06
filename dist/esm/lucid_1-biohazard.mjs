export const name="lucid_1-biohazard";
export const id="dl_4a02d0212b7a4f4f8921";
export const url=new URL("../icons/lucid_1-biohazard.svg?v=4fbe70b107aa1b989047b3dab5af5983c9ae55e339a2896c448ec9d3c231066c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
