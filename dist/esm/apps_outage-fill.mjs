export const name="apps_outage-fill";
export const id="dl_35ab624c2a4182ca347b";
export const url=new URL("../icons/apps_outage-fill.svg?v=b3f6f6668d8214b8ca13b2644ded1a6a4c6e86fbd41b421399a5841da370c4ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
