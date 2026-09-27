export const name="paint-roller";
export const id="dl_15402e210d0549478e8d";
export const url=new URL("../icons/paint-roller.svg?v=43e6bc6879f0a76110843de2529dcc5b195002bd128f65c394c5434b36fd3318",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
