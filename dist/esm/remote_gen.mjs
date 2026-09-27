export const name="remote_gen";
export const id="dl_40d1070f419db218931d";
export const url=new URL("../icons/remote_gen.svg?v=e514285417bead66d029a1d325b71e7080fab6f8fa686ccc94765f487b97a60b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
