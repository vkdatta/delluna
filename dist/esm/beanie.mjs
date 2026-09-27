export const name="beanie";
export const id="dl_129615a960c64e2b95aa";
export const url=new URL("../icons/beanie.svg?v=b0ddc9273822d46f2a07f1c0e72c0edb8d676d7a0a0171ebfb431ed0e0497077",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
