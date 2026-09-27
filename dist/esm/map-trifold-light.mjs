export const name="map-trifold-light";
export const id="dl_dff66ee43c1b43c69909";
export const url=new URL("../icons/map-trifold-light.svg?v=efce11ea4b29ad0ba2c158842b89c8cd7c464f52a9bfe065970ae908ca38c779",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
