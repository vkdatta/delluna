export const name="microwave_gen";
export const id="dl_719dbe8622419aa3cedc";
export const url=new URL("../icons/microwave_gen.svg?v=2d1bd1aa177bd84265cda3f1e2c06c8f26a174d10738299e16bdb2c7c11d9981",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
