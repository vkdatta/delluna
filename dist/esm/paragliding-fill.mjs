export const name="paragliding-fill";
export const id="dl_26f740f2562841aa8958";
export const url=new URL("../icons/P/paragliding-fill.svg?v=01a5e586ed111a833da21deda3a504fbc034d1f5817c33973ca648bb3c90abdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
