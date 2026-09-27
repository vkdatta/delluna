export const name="lamp-pendant-light";
export const id="dl_4b839dda48d540869a70";
export const url=new URL("../icons/lamp-pendant-light.svg?v=22f9bc5a1e0d888522dfb00170f14922280ba68de6b147497e82a5ee9fdf8675",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
