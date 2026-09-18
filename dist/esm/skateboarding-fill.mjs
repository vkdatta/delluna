export const name="skateboarding-fill";
export const id="dl_cf1f47495f5c4746af82";
export const url=new URL("../icons/skateboarding-fill.svg?v=217e78ab1adb8e762330ade23508094c516df6df890755ec3cf985d6ab33bf49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
