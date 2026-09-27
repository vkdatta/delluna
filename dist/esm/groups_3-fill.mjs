export const name="groups_3-fill";
export const id="dl_7fb1df2ee73dd53414a9";
export const url=new URL("../icons/groups_3-fill.svg?v=0ad423d93d60ebdd2914ac3c668a387c903445a2916dc1c42a35ed8b3e11e2fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
