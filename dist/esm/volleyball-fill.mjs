export const name="volleyball-fill";
export const id="dl_5d4c22f2489c8295ca3e";
export const url=new URL("../icons/volleyball-fill.svg?v=01075c4647979d9493544a99b26ee1c666e236bbf7d49732b644a0247921555f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
