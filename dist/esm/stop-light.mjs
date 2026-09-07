export const name="stop-light";
export const id="dl_76332d8a99e5416fb189";
export const url=new URL("../icons/S/stop-light.svg?v=79225c449e54870767412420ec4c162788bcdeab06fd4263fb832444b0ec596c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
