export const name="asterisk-simple-fill";
export const id="dl_1aefe3d2570343218245";
export const url=new URL("../icons/asterisk-simple-fill.svg?v=2512433aee904d3f4396c00d2efa2fe3d4e2813d3b1b55763a3bb2a8c8d202b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
