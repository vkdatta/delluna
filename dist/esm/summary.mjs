export const name="summary";
export const id="dl_13b9aa389eff4e558600";
export const url=new URL("../icons/summary.svg?v=af96c92781307e4ef3bb61c05e08cb13ac3900fe68b90776f288df97c85973a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
