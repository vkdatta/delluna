export const name="behance-logo-duotone";
export const id="dl_48e2b5bc5d044e79af92";
export const url=new URL("../icons/behance-logo-duotone.svg?v=79beab618b84fe24f52cbf98f286022724a5bec49a9a312a1480ed1a29bd4b9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
