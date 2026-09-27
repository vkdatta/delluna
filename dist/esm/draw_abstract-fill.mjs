export const name="draw_abstract-fill";
export const id="dl_5d5414b5b6eb26ae6b22";
export const url=new URL("../icons/draw_abstract-fill.svg?v=3565581631d47697d42d5310167d22c8f164306b296290b84e0bd852c02eaf1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
