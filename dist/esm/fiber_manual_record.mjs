export const name="fiber_manual_record";
export const id="dl_d7b905487a3583e9cbef";
export const url=new URL("../icons/fiber_manual_record.svg?v=b8f52f84741123f3539b4d80953dff598caf2d2103ef77993f2913e9dfaef0db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
