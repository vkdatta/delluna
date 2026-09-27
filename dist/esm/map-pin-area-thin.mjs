export const name="map-pin-area-thin";
export const id="dl_a06795e69df047e0b05f";
export const url=new URL("../icons/map-pin-area-thin.svg?v=87438a2e448e4c541f2f8f6adab859e62f2c3c22247017a636e45ef50eea0772",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
