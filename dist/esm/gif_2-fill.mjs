export const name="gif_2-fill";
export const id="dl_46ae10968632466385bb";
export const url=new URL("../icons/gif_2-fill.svg?v=c7107f8231f1f0109c2758bdf7ae36476d3c51be097ad4b8a595ef954cfeaad0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
