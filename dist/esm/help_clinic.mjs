export const name="help_clinic";
export const id="dl_a9261fc6e750589d5612";
export const url=new URL("../icons/help_clinic.svg?v=7aad7e83d72ac7501e256834098fbc85de4a2d4636b6277a254e801e4627a794",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
