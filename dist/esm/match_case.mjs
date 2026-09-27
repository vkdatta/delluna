export const name="match_case";
export const id="dl_0cd53558965e9094c116";
export const url=new URL("../icons/match_case.svg?v=92a6cc25531e5f44172d3d4ed31cec5fcf088b52a1731a4f6e6ebd471b1bc136",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
