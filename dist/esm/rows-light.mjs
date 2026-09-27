export const name="rows-light";
export const id="dl_a425d4c0d79345619b95";
export const url=new URL("../icons/rows-light.svg?v=06d6b21f1118241f88dba82d67edb4b74002b87cca4b1c370ced28158d548ada",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
