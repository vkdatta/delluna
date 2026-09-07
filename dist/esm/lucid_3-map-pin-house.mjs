export const name="lucid_3-map-pin-house";
export const id="dl_f44c75fa5baa4473a90a";
export const url=new URL("../icons/lucid_3-map-pin-house.svg?v=668674dcc150bf6a0c2f58e2cc832825049465406c3636bcff8a36434ebf0547",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
