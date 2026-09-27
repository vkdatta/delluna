export const name="rsvp-fill";
export const id="dl_2a3973383efe4b55d01e";
export const url=new URL("../icons/rsvp-fill.svg?v=240e9f5a9741e4cf670ae192dec183b112cbbb6b3a24cc3b7e82ea2498ed4cf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
