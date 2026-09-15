export const name="chair_umbrella-fill";
export const id="dl_059e9724c1f0476bb54d";
export const url=new URL("../icons/C/chair_umbrella-fill.svg?v=512be9bfdbbf6d4fb7169398387e6526f4559cfd59b3abbff03afa5c84ee0e13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
