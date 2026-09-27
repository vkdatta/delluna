export const name="lucid_2-drumstick";
export const id="dl_12bb75998b424731b03f";
export const url=new URL("../icons/lucid_2-drumstick.svg?v=fdd5e2663ae4a4fa9e385cc7050682888a3d89fe7c88fe9705665f14a019deb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
