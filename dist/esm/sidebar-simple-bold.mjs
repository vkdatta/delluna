export const name="sidebar-simple-bold";
export const id="dl_449f76c5868f4e329a3d";
export const url=new URL("../icons/S/sidebar-simple-bold.svg?v=28f6061e7a63ec7d54ca865657f33cee9c4fe519744dece2e59089d56fe4dff0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
