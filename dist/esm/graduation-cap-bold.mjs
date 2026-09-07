export const name="graduation-cap-bold";
export const id="dl_896c8f76e59a409b8811";
export const url=new URL("../icons/graduation-cap-bold.svg?v=1c199de125ec9d13357205090a995a3ab692d0ac538ec08c7dae557493d34e29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
