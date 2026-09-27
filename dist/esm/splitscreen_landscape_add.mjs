export const name="splitscreen_landscape_add";
export const id="dl_242e6645754a1bac3461";
export const url=new URL("../icons/splitscreen_landscape_add.svg?v=90ca10e7e3ba70b655fea99187ef8cfed8e0878ccc4b898ea8dc1983864456d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
