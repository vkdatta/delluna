export const name="umbrella-simple-fill";
export const id="dl_2c9c16cf3de04015a003";
export const url=new URL("../icons/U/umbrella-simple-fill.svg?v=cae6f173fccfdf2c77468d8a2d62ea29c1b7dcba0388a1f565c582b194f40fcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
