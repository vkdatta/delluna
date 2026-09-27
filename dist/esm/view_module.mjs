export const name="view_module";
export const id="dl_6f30cdaa7c18cb162a14";
export const url=new URL("../icons/view_module.svg?v=1c302dd04812228a2af3f6515b6ae90841c3d02b8220ad5ea13fc36c15007891",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
