export const name="fast-forward-circle-thin";
export const id="dl_3797bf786a744a8b914b";
export const url=new URL("../icons/fast-forward-circle-thin.svg?v=089fed6ca79fe538fb48c3e866692750569237f5db4d23ebdd53e88d97522394",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
