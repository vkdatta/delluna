export const name="masks-fill";
export const id="dl_63249aa5032707e0b28e";
export const url=new URL("../icons/masks-fill.svg?v=96143a154e1c969d09e5bf7f60c9f4b7e3546ed296bc9f1d3ea03204a2b60081",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
