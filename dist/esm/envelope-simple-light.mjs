export const name="envelope-simple-light";
export const id="dl_4cd7ec9e9eab440d8097";
export const url=new URL("../icons/envelope-simple-light.svg?v=21c468784e5a827fb3108f18542d94d3e370ffbe871716d38e239aace8789e72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
