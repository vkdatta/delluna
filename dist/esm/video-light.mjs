export const name="video-light";
export const id="dl_07df59eca3fbd0601319";
export const url=new URL("../icons/video-light.svg?v=b41a7cd7922ba0feb4accb0826741e3250e37c6c3aeb1ac2007f57209c9edf0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
