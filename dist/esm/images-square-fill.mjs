export const name="images-square-fill";
export const id="dl_d19ade08b158442795ec";
export const url=new URL("../icons/images-square-fill.svg?v=638e7b76bf737f70ffb1b999537663d91b8fd746c9bffb3ed8976ab5c4e21cd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
