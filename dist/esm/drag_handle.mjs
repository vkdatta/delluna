export const name="drag_handle";
export const id="dl_f65b1f37f2efa6f288e2";
export const url=new URL("../icons/drag_handle.svg?v=1a485226653bbb8de836bdab5197e5edfaca0b906d82dbb16ae90211e19c3c22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
