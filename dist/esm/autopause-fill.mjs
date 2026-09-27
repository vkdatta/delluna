export const name="autopause-fill";
export const id="dl_44611f00f376382f2ec6";
export const url=new URL("../icons/autopause-fill.svg?v=f2c17c31c42f1c3f8b3edc1e42c9cbb12b35a83bb56e8caeec99c9c6a5749095",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
