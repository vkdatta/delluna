export const name="restart_alt-fill";
export const id="dl_ef4db52a45fc43382fd7";
export const url=new URL("../icons/restart_alt-fill.svg?v=f97175e720feb7c72f22953ddc94b8856413f116cf1a7ebfd19480a3cae78943",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
