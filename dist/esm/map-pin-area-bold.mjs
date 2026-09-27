export const name="map-pin-area-bold";
export const id="dl_7ff7d47579394ce08320";
export const url=new URL("../icons/map-pin-area-bold.svg?v=870a8d9ac242e676bacd77f93ec98262793e451ac5c45a9da46d9e8f971259be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
