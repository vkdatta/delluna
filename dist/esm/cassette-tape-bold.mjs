export const name="cassette-tape-bold";
export const id="dl_52d0652457bd466b85ac";
export const url=new URL("../icons/cassette-tape-bold.svg?v=206824285b62a0f200c01441a77e74f4cc5479a3e9faebf4a0be23b97e5e2a6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
