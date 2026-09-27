export const name="dock_to_right";
export const id="dl_b5b1f7caac88e045d19d";
export const url=new URL("../icons/dock_to_right.svg?v=459e5ae6be462d305b03a13e4b5140b7026e6829f2773fc3dc3c6e4b953c2c44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
