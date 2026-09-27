export const name="flashlight-light";
export const id="dl_ac9d1383aaeb4098890d";
export const url=new URL("../icons/flashlight-light.svg?v=1bf647c840e359acd481beb62b328faa8b455a5bea0e6370566730b11ee7dbc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
