export const name="math-operations-light";
export const id="dl_8220a90bf71b4ca68dc8";
export const url=new URL("../icons/math-operations-light.svg?v=e60e26d423dac1d64d01dc37a5ab632fb549fec9019756a3d24dc4fd7e88e232",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
