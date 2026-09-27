export const name="gps-duotone";
export const id="dl_2182054751b24f41be4f";
export const url=new URL("../icons/gps-duotone.svg?v=57c83330b18c4ff63d89b39732f576e898d4ec156ea68e2ac999f91dd2432557",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
