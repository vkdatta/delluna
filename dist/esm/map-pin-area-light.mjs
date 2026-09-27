export const name="map-pin-area-light";
export const id="dl_a565fc15aeaf4eda8280";
export const url=new URL("../icons/map-pin-area-light.svg?v=afae93975b1595c6ab2b549152d893d2b865b264bb81fe5e835f08e6e28427ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
