export const name="docs_apps_script-fill";
export const id="dl_cd99be44de9c1437dc55";
export const url=new URL("../icons/docs_apps_script-fill.svg?v=9ca15eae06e3a4b6b561095244313448925f7a2c696ecea3aa1a5c2bb4af4c29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
