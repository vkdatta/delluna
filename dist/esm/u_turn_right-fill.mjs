export const name="u_turn_right-fill";
export const id="dl_bb5241576c8185936ef4";
export const url=new URL("../icons/u_turn_right-fill.svg?v=22e5bd53f396ff07f22fb8d42d478457cdfe7fb7b1ab39de3772f2124c55e8e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
