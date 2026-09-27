export const name="image-broken-light";
export const id="dl_7dab69d6c25e4b25b1f7";
export const url=new URL("../icons/image-broken-light.svg?v=8ed8e415d3be24d58156cffaccfd7ae838d55bb7c619d52d28b485db5f7fa02c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
