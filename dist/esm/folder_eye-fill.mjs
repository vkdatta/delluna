export const name="folder_eye-fill";
export const id="dl_7b7882152031dbe59dbe";
export const url=new URL("../icons/folder_eye-fill.svg?v=7579dbde125cdac49095d265c9ba06f514003b0fab1900b5c5f12898c69546d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
