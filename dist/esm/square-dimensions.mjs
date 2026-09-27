export const name="square-dimensions";
export const id="dl_fb75ab4ee9d042029282";
export const url=new URL("../icons/square-dimensions.svg?v=ba0d59816284526039922d82fa7b77e58fed70b9330106e132a8e73f9abc16a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
