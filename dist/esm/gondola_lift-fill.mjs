export const name="gondola_lift-fill";
export const id="dl_af575e54b6a3796592d5";
export const url=new URL("../icons/gondola_lift-fill.svg?v=a73e9846539e88b57a7e78d57c2e7bb28f20cf7b0108d1c7fc6ce813b415efbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
