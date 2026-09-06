export const name="lucid_2-eye";
export const id="dl_77f70c206c6a472e80a5";
export const url=new URL("../icons/lucid_2-eye.svg?v=7de3a07e9ffd5d78a7f7adbc8e3ee55fde59e8c28d07a0274278c737ed443a5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
