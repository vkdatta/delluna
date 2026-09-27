export const name="roundabout_left-fill";
export const id="dl_cbb5ed4e02476d2bf6aa";
export const url=new URL("../icons/roundabout_left-fill.svg?v=a73c5998d1eeb99ef4b25333f19f5c1531d10565cc107760a7ae0ff09d853921",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
