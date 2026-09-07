export const name="square-split-horizontal-fill";
export const id="dl_bf1eab74d7a144a69db4";
export const url=new URL("../icons/S/square-split-horizontal-fill.svg?v=cb047582904dc8ae92fe8f4ff9d0bb31df3c74a64bd5b0bc68eb6b2df3445f25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
