export const name="labs-fill";
export const id="dl_92ea02208522fa1ad666";
export const url=new URL("../icons/labs-fill.svg?v=34b6caf3ae6fd89e27dc47629357ede81f97765aa80f547409ba692cf00cddbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
