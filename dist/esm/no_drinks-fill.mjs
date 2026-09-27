export const name="no_drinks-fill";
export const id="dl_e5f9b73011a6f067e3cc";
export const url=new URL("../icons/no_drinks-fill.svg?v=78803d324a1072aed62d0a479954fd24aef8c848c010b453f056a6343b77ada8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
