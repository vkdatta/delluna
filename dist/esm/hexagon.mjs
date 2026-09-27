export const name="hexagon";
export const id="dl_8c53195de07547b282bb";
export const url=new URL("../icons/hexagon.svg?v=863f13afd8a8426125b918d4d4b769971ba4c04379c4f690f83b769075478dda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
