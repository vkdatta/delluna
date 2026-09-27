export const name="file-cpp-fill";
export const id="dl_dae0b6d34f0c4b43bf54";
export const url=new URL("../icons/file-cpp-fill.svg?v=ef75c6d2c786000354c12ef8a37136c44b8470a33807bc1bd613476e8ed6177b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
