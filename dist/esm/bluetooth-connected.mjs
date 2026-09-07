export const name="bluetooth-connected";
export const id="dl_3eb2b0df33294089abd5";
export const url=new URL("../icons/bluetooth-connected.svg?v=f0142ec68d5e2aa0f8c9addfb6af30b7aa5383e1824334c554b891f358679015",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
