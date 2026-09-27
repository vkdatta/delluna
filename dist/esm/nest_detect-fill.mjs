export const name="nest_detect-fill";
export const id="dl_8c380c93bed8777164d7";
export const url=new URL("../icons/nest_detect-fill.svg?v=ab783412f56f40767581115eead81c3d3267fa80227fde0b31fbefd98915b13e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
