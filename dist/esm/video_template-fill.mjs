export const name="video_template-fill";
export const id="dl_6fb475e0acd6fc790ca7";
export const url=new URL("../icons/video_template-fill.svg?v=c81f1e6c8d91257417b15cc5564cb89d9b51f76ed787bada97070271f816521a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
