export const name="pregnancy-fill";
export const id="dl_6ab29963ea7a721de1c1";
export const url=new URL("../icons/pregnancy-fill.svg?v=a2e1b6782c4871e182640c61426fe0b595cd302d03580021975afe0309397081",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
