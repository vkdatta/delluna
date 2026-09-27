export const name="rotate_90_degrees_ccw-fill";
export const id="dl_3f81975def86a03ecd44";
export const url=new URL("../icons/rotate_90_degrees_ccw-fill.svg?v=d930366d34835c4601d123177dc2e831e25a0483486698bcf12baf22d15f56ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
