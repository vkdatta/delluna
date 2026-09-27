export const name="settings_cinematic_blur-fill";
export const id="dl_11ee12ab40aab68851c9";
export const url=new URL("../icons/settings_cinematic_blur-fill.svg?v=169e211425e4413daddf7f332d7d020bc857602e6c43a7af579b2ecfdeeb5995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
