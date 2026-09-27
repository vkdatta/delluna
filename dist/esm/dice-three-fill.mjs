export const name="dice-three-fill";
export const id="dl_607f3a56a87042139727";
export const url=new URL("../icons/dice-three-fill.svg?v=8d980bc0208947a5aed79f25d9002a5e5e6ffe6b8700cdec7dee6ea448217199",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
