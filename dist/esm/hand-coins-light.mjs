export const name="hand-coins-light";
export const id="dl_6bb1fc33b08441d4b5e2";
export const url=new URL("../icons/hand-coins-light.svg?v=80ae8f0fef53b5f9360ea052354da23490e5728104032a492055734863311631",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
