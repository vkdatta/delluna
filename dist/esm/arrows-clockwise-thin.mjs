export const name="arrows-clockwise-thin";
export const id="dl_19ca5ceb5cdc4869b021";
export const url=new URL("../icons/arrows-clockwise-thin.svg?v=0e22cc1652083b4a47cf59fde3618c213da8eb1383437e6904598b1a68b7bce9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
