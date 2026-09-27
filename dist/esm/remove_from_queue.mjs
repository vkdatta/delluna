export const name="remove_from_queue";
export const id="dl_c495d5f1e4ab5b03ca7b";
export const url=new URL("../icons/remove_from_queue.svg?v=db564565cfc50cf0afd38e421961fa3bd4c3dd5e38b0b7e4e19476dc6e25964b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
