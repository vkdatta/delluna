export const name="lucid_2-lamp";
export const id="dl_a680ce91714e4c719be8";
export const url=new URL("../icons/lucid_2-lamp.svg?v=9a99fd28792209aeb6c018c068f1d8624970de4c66aa8f6ed111f5f4269147db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
