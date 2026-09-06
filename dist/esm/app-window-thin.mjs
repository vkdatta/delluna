export const name="app-window-thin";
export const id="dl_9b949910b26848fdafff";
export const url=new URL("../icons/app-window-thin.svg?v=d0f00b3713e8950b4c44f47a4b458df8cb070b3e5193b5394dd61148eeeef8d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
