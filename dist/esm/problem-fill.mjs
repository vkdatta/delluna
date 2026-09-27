export const name="problem-fill";
export const id="dl_4672f96745f50c34f193";
export const url=new URL("../icons/problem-fill.svg?v=dd9263736700f5b8ff01f0eb92a3d45f1fce15f9dd4c9a1aebc0431c193cd314",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
