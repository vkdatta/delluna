export const name="line_end_square-fill";
export const id="dl_f6073a65185840a49624";
export const url=new URL("../icons/line_end_square-fill.svg?v=1910ca2d466aca781b4549c1c939046caa1e2af6946478f32c8a0decec3e3389",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
