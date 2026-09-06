export const name="hourglass-high-light";
export const id="dl_c4d52a334868410b946e";
export const url=new URL("../icons/hourglass-high-light.svg?v=44ebfcf7256a94641360733da6c7abdc2a62a5413cb7d6b477ccf3fb55afa889",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
