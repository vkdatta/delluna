export const name="scoreboard";
export const id="dl_a1c6bfa4321441568a14";
export const url=new URL("../icons/S/scoreboard.svg?v=0006656d57bac823202dd4beaa1047a034aee1f9ddfda2b40d6e923813150708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
