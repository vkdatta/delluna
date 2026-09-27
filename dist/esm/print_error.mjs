export const name="print_error";
export const id="dl_3611c76adb2e09950ca9";
export const url=new URL("../icons/print_error.svg?v=0736355470a5783f8bed0ed331b6a84c5cca34825f43a53ac0931fd83e266fb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
