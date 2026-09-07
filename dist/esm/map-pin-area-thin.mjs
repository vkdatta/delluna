export const name="map-pin-area-thin";
export const id="dl_a06795e69df047e0b05f";
export const url=new URL("../icons/map-pin-area-thin.svg?v=ed7620d12e09c8350b9c74b1bf61eb735b28beea0430c05efe02c8cdb78a23b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
