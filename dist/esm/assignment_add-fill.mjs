export const name="assignment_add-fill";
export const id="dl_6a0b47b05141e75cbee0";
export const url=new URL("../icons/assignment_add-fill.svg?v=4c6817bbddceb25983201c47597bce954cd9082494fc0b7a586852c79da6d614",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
