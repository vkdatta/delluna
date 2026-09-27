export const name="cube-transparent-thin";
export const id="dl_5331e7a59cd04e50b49f";
export const url=new URL("../icons/cube-transparent-thin.svg?v=3e4f8bcf000e895f371c7975b1196fc5ac581f245d6e295cf41697f9745fa951",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
