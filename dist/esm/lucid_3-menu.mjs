export const name="lucid_3-menu";
export const id="dl_c8908906ec9c4484bdff";
export const url=new URL("../icons/lucid_3-menu.svg?v=942e39c5903264de46d5dd2741008d5cff92dd01c5ea9e2a9f24e51d5a317d01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
