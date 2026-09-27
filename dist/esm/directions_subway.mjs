export const name="directions_subway";
export const id="dl_1d54a7387abca75706da";
export const url=new URL("../icons/directions_subway.svg?v=5930bafed5b338098310cd4c289a6d7b9888ea3e7b0d3660612a96060b9f9c01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
