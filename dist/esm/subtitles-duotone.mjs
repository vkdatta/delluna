export const name="subtitles-duotone";
export const id="dl_8a9334ea762847eea1fb";
export const url=new URL("../icons/S/subtitles-duotone.svg?v=f90d1c5a64cec7bd3a94170d5417447afacf4814b45fbe467bf7fc53247a009e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
