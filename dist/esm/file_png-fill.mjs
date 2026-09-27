export const name="file_png-fill";
export const id="dl_1190d6e80f8fbc0d85fd";
export const url=new URL("../icons/file_png-fill.svg?v=8f092ca2cd6d63bd6e6279b16c10e45e04e7dc0dd163caca87d3c488adf2afb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
