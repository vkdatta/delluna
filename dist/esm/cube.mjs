export const name="cube";
export const id="dl_1ba8fbc8a96045c6ac8e";
export const url=new URL("../icons/cube.svg?v=7c0f13cb492d0dd212e48ab259dabec4627df32d71aa00ce31b3228c0f35112b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
