export const name="swords-fill";
export const id="dl_040c3366c67a14d913f7";
export const url=new URL("../icons/swords-fill.svg?v=00f73005a0c9a8004bd5c2002671c1de55f568d7ad4846a5b311982b36afb1b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
