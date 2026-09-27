export const name="square-logo-duotone";
export const id="dl_147e576b3e9e010699d0";
export const url=new URL("../icons/square-logo-duotone.svg?v=1fc5630685c48be4f66834886a68a3f8ab3f46015fdf8b22c6ca41d82029d3e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
