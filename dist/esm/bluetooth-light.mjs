export const name="bluetooth-light";
export const id="dl_91cd7e1727f94e45ae87";
export const url=new URL("../icons/bluetooth-light.svg?v=b2f61b825ef9c881de658a3fda26bae7da7bdf325695eb9f6d426ced3e1d7c23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
