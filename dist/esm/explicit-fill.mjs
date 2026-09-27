export const name="explicit-fill";
export const id="dl_7bfdbb54ad55411fe28c";
export const url=new URL("../icons/explicit-fill.svg?v=7da75c564efad76fae8ec113155fe2780bd9daa8f9338d56de9971207084d858",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
