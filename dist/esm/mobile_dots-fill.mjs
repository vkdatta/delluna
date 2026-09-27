export const name="mobile_dots-fill";
export const id="dl_3bc416cce441e2fa5977";
export const url=new URL("../icons/mobile_dots-fill.svg?v=8de31ad3fb61852d5115cdfae7a3e57d7c27d9d86c6419b052824deaf65f93e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
