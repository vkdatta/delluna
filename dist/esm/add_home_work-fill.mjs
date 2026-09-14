export const name="add_home_work-fill";
export const id="dl_0b2ecf2ffd964200acc8";
export const url=new URL("../icons/A/add_home_work-fill.svg?v=97f22928e09597de0280fd3f06622ec7563b0a23b2a13cea3d551c6ccecbeacd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
