export const name="engineering-fill";
export const id="dl_82eb834f629ab318b48d";
export const url=new URL("../icons/engineering-fill.svg?v=3c2b897af43f80c331ecbdcc8ea34413e524801ccb0bce23d1780a3f0a17f869",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
