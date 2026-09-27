export const name="icecream";
export const id="dl_fb71bc65f31eb3824b0d";
export const url=new URL("../icons/icecream.svg?v=10347c5a0bd76c1f54b2b7af27e57a6404c9f80b674cd1b2dfd4ee234eab1f53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
