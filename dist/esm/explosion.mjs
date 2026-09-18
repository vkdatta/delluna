export const name="explosion";
export const id="dl_90a9f1c2c76c4a24a5b2";
export const url=new URL("../icons/explosion.svg?v=10205a34fcd59e51e3e978d96d65a829a92e0ea7c0da8891b5e7073e1aa910c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
