export const name="text-cursor-input";
export const id="dl_520ff86bd8d948bd8b8d";
export const url=new URL("../icons/text-cursor-input.svg?v=b97814d39055259d6df71766efb5e85ca2653c5b2eb3b7614de320f8f04c31cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
