export const name="move_location";
export const id="dl_4a64a0ee3b8e28d9c6fd";
export const url=new URL("../icons/move_location.svg?v=bd858f3492eb27cb3b2b5f86eb0c6a6235683cdefd64afdd11396e316c3c0ca1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
