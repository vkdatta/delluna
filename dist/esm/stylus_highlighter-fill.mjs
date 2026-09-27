export const name="stylus_highlighter-fill";
export const id="dl_7ce0055fa0528bcf012f";
export const url=new URL("../icons/stylus_highlighter-fill.svg?v=85b4c9bb85b73d04ecf650586bd11fa97542de927ca83f3e11bc0ea2f7d516c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
