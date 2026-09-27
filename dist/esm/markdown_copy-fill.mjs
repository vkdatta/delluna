export const name="markdown_copy-fill";
export const id="dl_4470773312c1a57fc895";
export const url=new URL("../icons/markdown_copy-fill.svg?v=fab2bf10ba0d6656b731d9189ecb0e8176d21fbcf3bf49ccde5b32668d81cafe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
