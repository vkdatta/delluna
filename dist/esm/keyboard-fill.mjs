export const name="keyboard-fill";
export const id="dl_d1bb3cd8441d4b609be5";
export const url=new URL("../icons/keyboard-fill.svg?v=e0588d7da3d87f20aba27d5b56b86162c78c2fddb79b212fee30142bbc775cd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
