export const name="share-network-thin";
export const id="dl_346ff683983e49b493a4";
export const url=new URL("../icons/S/share-network-thin.svg?v=39bee5c08c847a7034288c9ee8ea1a65e61e0f1efc716811771e87c4b7e9f262",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
