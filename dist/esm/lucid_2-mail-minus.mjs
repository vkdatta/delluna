export const name="lucid_2-mail-minus";
export const id="dl_e3711150aefd4d59b6ea";
export const url=new URL("../icons/lucid_2-mail-minus.svg?v=f38311c8dab9f917bb5b820c4d1a6a27500504c42abbea804d107d6a1f64c79c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
