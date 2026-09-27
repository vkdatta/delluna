export const name="steam-logo";
export const id="dl_1005782a26d1fdf33aab";
export const url=new URL("../icons/steam-logo.svg?v=f83bafcfeef0fef44f07026eb3887aa2ec01deeb48511d47495b01af410f39c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
