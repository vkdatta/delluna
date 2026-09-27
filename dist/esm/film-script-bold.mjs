export const name="film-script-bold";
export const id="dl_6d3079ba6ed24d59bc7f";
export const url=new URL("../icons/film-script-bold.svg?v=28196bc9799cc31659c5ec83a067dfc00cecb6e4000b44a5517b19677cfc1ac4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
