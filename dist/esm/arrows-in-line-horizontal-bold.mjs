export const name="arrows-in-line-horizontal-bold";
export const id="dl_e295e5518c0d4821a887";
export const url=new URL("../icons/arrows-in-line-horizontal-bold.svg?v=dc848a99d67865e3a1c1488443a2d5edd53e22bceef6f5134552e1ded108328a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
