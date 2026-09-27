export const name="background_grid_small";
export const id="dl_05d5c6a906dab52fe5a1";
export const url=new URL("../icons/background_grid_small.svg?v=3e7ed367e5e2df8d112520f48abeb4ca9b2e933b10ec364e9094419f3b1d142f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
