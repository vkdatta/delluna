export const name="upcoming-fill";
export const id="dl_51802b72a342426cb020";
export const url=new URL("../icons/upcoming-fill.svg?v=99c3e3571b826b9b16d927c0e8ef5609a5beae226d9cdd8cb7754cc6db6d5e14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
