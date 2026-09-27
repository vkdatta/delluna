export const name="add_call";
export const id="dl_fd4ee6b9fdbd75ab66bf";
export const url=new URL("../icons/add_call.svg?v=9c05d2f681dabe814c47895eb774eaab38971d4b272f374aa369f11e680e6e27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
