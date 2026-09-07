export const name="trolley-suitcase-duotone";
export const id="dl_c8d873a1628844e09785";
export const url=new URL("../icons/T/trolley-suitcase-duotone.svg?v=9cbd33ddf4dec52b02f66987273f90188053d9ac4273bc19bdf6ca2f2f7f1b2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
