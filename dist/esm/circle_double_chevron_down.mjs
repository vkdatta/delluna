export const name="circle_double_chevron_down";
export const id="dl_5905e59340419bebec83";
export const url=new URL("../icons/circle_double_chevron_down.svg?v=b486ce996d6c28039185e042ce051decffaca7ac0293b36aed7f52d70c9d8a44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
