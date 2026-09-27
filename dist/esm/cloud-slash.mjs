export const name="cloud-slash";
export const id="dl_bc85c8d0e7b440968fe3";
export const url=new URL("../icons/cloud-slash.svg?v=fc0dc78d04722e2fa31dae99af24487845385955bf2d2aa9e5277097d2008907",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
