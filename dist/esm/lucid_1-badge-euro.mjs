export const name="lucid_1-badge-euro";
export const id="dl_c3fd940a1e25429eada7";
export const url=new URL("../icons/lucid_1-badge-euro.svg?v=ab318284fd0e6757b0bf7b64ba04a717e8242abad5b69a5bf509114ee383461b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
