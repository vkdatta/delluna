export const name="featured_play_list-fill";
export const id="dl_1536e47b5e24e6304c4f";
export const url=new URL("../icons/featured_play_list-fill.svg?v=6d3482af14301b4dbe018161ec7d514e551947be63f30cd9e2bb286452687818",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
