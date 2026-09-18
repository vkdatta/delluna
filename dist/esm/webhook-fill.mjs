export const name="webhook-fill";
export const id="dl_6b4725d0bf114891970f";
export const url=new URL("../icons/W/webhook-fill.svg?v=333400b3e1021d032a60c6428b3daa708eb7037b5ae789b8b64311983e078fab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
