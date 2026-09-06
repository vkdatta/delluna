export const name="caret-circle-double-up-bold";
export const id="dl_40230a50018e40cb819e";
export const url=new URL("../icons/caret-circle-double-up-bold.svg?v=ea47fd2e1fac90f961288ce76014c53e04d65f03e9fd7d02a6c887b0114bd53b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
