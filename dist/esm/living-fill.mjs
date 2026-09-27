export const name="living-fill";
export const id="dl_771d877eb6cec845f11a";
export const url=new URL("../icons/living-fill.svg?v=9b0b95abd2c11cb941fb1a86fd8ca9854e3b5d6e4abbe6af66bcb8af95489b3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
