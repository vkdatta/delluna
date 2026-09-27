export const name="nest_audio-fill";
export const id="dl_756dda799445a6c27714";
export const url=new URL("../icons/nest_audio-fill.svg?v=16bf5fca40c80241c0810539b13d2786d3d6e36a9ccf57cee2993e62bf1082a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
