export const name="auto_transmission-fill";
export const id="dl_d48e4743af69853447f2";
export const url=new URL("../icons/auto_transmission-fill.svg?v=17fc3969f4a36a0b95f148db2bf2e314084e72677700d79c1ecbd337503810d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
