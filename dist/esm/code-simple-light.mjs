export const name="code-simple-light";
export const id="dl_d4b2d89cd37f4e45872f";
export const url=new URL("../icons/code-simple-light.svg?v=35f24d1ab8e12356439afdf8b5c269343ae8235b7636ff4f89086d43d9181135",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
