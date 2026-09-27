export const name="cpu";
export const id="dl_e3199077f5f54636b138";
export const url=new URL("../icons/cpu.svg?v=20e16596c93ca28c0eacdda9a3bc03e9d80aefce38c14ad0ef174a23758e7d76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
