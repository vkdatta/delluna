export const name="screenshot_frame-fill";
export const id="dl_39380c747a26c5d7d022";
export const url=new URL("../icons/screenshot_frame-fill.svg?v=6defce0f09f3d8d8a40b20dac082c20a90e4fb4a68a81feaeab4c3a8929cb04c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
