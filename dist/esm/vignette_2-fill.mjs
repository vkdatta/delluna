export const name="vignette_2-fill";
export const id="dl_62b80d1a2cd6d3421cea";
export const url=new URL("../icons/vignette_2-fill.svg?v=98c7699c7427a51d4eb05a717d684cd84fdc21f8238694d954f32e9ad8b9844e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
