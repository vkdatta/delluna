export const name="line_start_circle-fill";
export const id="dl_00776433176c64a0dcb1";
export const url=new URL("../icons/line_start_circle-fill.svg?v=8dd9516a02d6cf180af979573bed190e73ef01e6b8aa5dae82bf5a0d6433f4ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
