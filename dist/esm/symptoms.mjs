export const name="symptoms";
export const id="dl_958e0b94753f41d5b770";
export const url=new URL("../icons/S/symptoms.svg?v=f74122501b504f8bb4faec039c82cbde3ef2e1adf07ddf8ad4081750921b8e47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
