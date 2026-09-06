export const name="acorn-fill";
export const id="dl_4ea7de7bf54b4a0d81bd";
export const url=new URL("../icons/acorn-fill.svg?v=be678fb6904c07257108ecbdb455547fa3525f95f7e00d08d88edf0afe04514e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
