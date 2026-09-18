export const name="forest-fill";
export const id="dl_503c505634544e9db27b";
export const url=new URL("../icons/forest-fill.svg?v=0342623a28a4bd4dbe2f29f2dd60541222e0e887438cc4c6307ef4c311f8e786",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
