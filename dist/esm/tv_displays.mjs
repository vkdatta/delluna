export const name="tv_displays";
export const id="dl_e1f8b9a1ee94f816f3fb";
export const url=new URL("../icons/tv_displays.svg?v=fa30149abe49d391269a48d31c74eddc11866edc7c931e0df289c3e3ab8028db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
