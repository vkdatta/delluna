export const name="screen_share-fill";
export const id="dl_e9133f6e44ebd6474186";
export const url=new URL("../icons/screen_share-fill.svg?v=d992957c9e04a459d43696a2f22156d8493b085c608ab54253c912254a1c7734",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
