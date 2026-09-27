export const name="rotate_90_degrees_ccw";
export const id="dl_080110e6dbd2008d24f4";
export const url=new URL("../icons/rotate_90_degrees_ccw.svg?v=9bad860cb61d3756ca5b2d43147b21bd0fa31eb7743d422889e94df4658f2091",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
