export const name="hoodie-light";
export const id="dl_08b4fd29aa8248b5a9c4";
export const url=new URL("../icons/hoodie-light.svg?v=80a332d94c991903612d1b59f545c663c63182067c407d7332d8fe1e73beeebe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
