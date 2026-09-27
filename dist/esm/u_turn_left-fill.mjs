export const name="u_turn_left-fill";
export const id="dl_9bd1dd8850922dc324ec";
export const url=new URL("../icons/u_turn_left-fill.svg?v=a40e1756053dc3fe5924fa24aef520df65160761f6ba0ece3183d856328159c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
