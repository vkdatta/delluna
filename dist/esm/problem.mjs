export const name="problem";
export const id="dl_cc0634034fe5499b948d";
export const url=new URL("../icons/P/problem.svg?v=6080722bbb3f1b68aa610c28e53a5374e3ca3a0662a95d47b14850ca4de1ae54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
