export const name="sailboat-thin";
export const id="dl_bd97dc163831d847da45";
export const url=new URL("../icons/sailboat-thin.svg?v=7628b4a05ab77dcbf2ca5b1a8f3c5f80560bd05e6edc8373fed70915a33958e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
