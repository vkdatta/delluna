export const name="smiley-nervous-fill";
export const id="dl_b98c065d4ad970a5a44e";
export const url=new URL("../icons/smiley-nervous-fill.svg?v=33e6e7696169addd4262c0224c6bed4af2fc7a32af00e5bb60afd482fcca1149",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
