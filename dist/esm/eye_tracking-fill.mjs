export const name="eye_tracking-fill";
export const id="dl_f5406b4b1a8b7e1c05f3";
export const url=new URL("../icons/eye_tracking-fill.svg?v=80f1420b66bf47ad92624cbdff296db639afb586fae16893c4e8ceabcdd9f1c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
