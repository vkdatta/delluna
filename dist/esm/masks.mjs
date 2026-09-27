export const name="masks";
export const id="dl_df209ff337c066bb3e7c";
export const url=new URL("../icons/masks.svg?v=3866f85de43de1897db59659e800d84ba731cab538a8960f8797b6913bffb949",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
