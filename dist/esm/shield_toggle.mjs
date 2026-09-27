export const name="shield_toggle";
export const id="dl_890ad5f07ea951d4f8e5";
export const url=new URL("../icons/shield_toggle.svg?v=59f76f780f50fa996ba4eb91399eb3ab8eef98ab7e4e0e789fe4b9ea1a246b38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
