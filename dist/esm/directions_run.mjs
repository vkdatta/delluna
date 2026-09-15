export const name="directions_run";
export const id="dl_72c4ef8bcae04ac68eda";
export const url=new URL("../icons/D/directions_run.svg?v=caedb386fb63a18f07c9cd0970371bb61155978a7135f9cd1061852661daa49f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
