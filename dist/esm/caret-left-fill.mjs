export const name="caret-left-fill";
export const id="dl_3f65dc82792f454493fb";
export const url=new URL("../icons/caret-left-fill.svg?v=31041735b9eb4fc1bb03f76baa3ba21f299bda1f41dcd3963bdfdf9b44307901",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
