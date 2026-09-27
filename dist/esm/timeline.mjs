export const name="timeline";
export const id="dl_e0346f4eb5234093a02f";
export const url=new URL("../icons/timeline.svg?v=1b2f4d2e4ae4da68e82cd97ada61dadcba0b4b0d8551d3a44ff29327c454bdf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
