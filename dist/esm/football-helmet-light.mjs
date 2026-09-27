export const name="football-helmet-light";
export const id="dl_a0815ab521d8435d9e22";
export const url=new URL("../icons/football-helmet-light.svg?v=93f3b9bb20ab607405ed672706c52c1d3946ad6004f0d05e8f48d65dc43412e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
