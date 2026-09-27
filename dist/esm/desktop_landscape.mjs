export const name="desktop_landscape";
export const id="dl_bd597b729ae5605101f3";
export const url=new URL("../icons/desktop_landscape.svg?v=077ea89a54127d3701662b1e27dc470244db729b18c651b6a152f758baf7e0ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
