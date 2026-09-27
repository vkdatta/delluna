export const name="hiking-fill";
export const id="dl_01a47343ca06009cc98b";
export const url=new URL("../icons/hiking-fill.svg?v=6ae96b7486168ae9c310fadd52bd624a0817a2b343eca40d3c31fb7636a575b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
