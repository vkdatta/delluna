export const name="signal_cellular_alt_1_bar-fill";
export const id="dl_5bae7091b68d3220c004";
export const url=new URL("../icons/signal_cellular_alt_1_bar-fill.svg?v=27c1b96c51b6bb9bf4162d9c6b4bd96c6dc0c2962720d055d39daf8a055238d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
