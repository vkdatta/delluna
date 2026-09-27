export const name="text-indent-bold";
export const id="dl_4cccca58e8ff34b8ef63";
export const url=new URL("../icons/text-indent-bold.svg?v=7ebb702193b3c02260fbfa9713a7274934e28b3a839aaf2fd5edb692d7569b1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
