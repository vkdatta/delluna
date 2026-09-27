export const name="plug-charging-thin";
export const id="dl_78bedf6f2f354e229861";
export const url=new URL("../icons/plug-charging-thin.svg?v=6a8109835f43f4861dc46eec5e7c02c5378bc57149e67afa6f89f867a514638f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
