export const name="globe-fill";
export const id="dl_02a92f72405a4a398fba";
export const url=new URL("../icons/globe-fill.svg?v=8ac27242c8193f0ac40f8f142689cee0012acc9912584ea7e02012cebca12862",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
