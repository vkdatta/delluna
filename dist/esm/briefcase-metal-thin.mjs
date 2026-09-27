export const name="briefcase-metal-thin";
export const id="dl_e5f25e3258da437da031";
export const url=new URL("../icons/briefcase-metal-thin.svg?v=757f3048420c71857ab80daa5d41cee2e2cd89779a5683806048602a3917fdf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
