export const name="exclude-light";
export const id="dl_5270f740305146c4b3fb";
export const url=new URL("../icons/exclude-light.svg?v=0146988354baafe3dc80d7c52a61f4273785c2ce71352a23a18df31705670d2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
