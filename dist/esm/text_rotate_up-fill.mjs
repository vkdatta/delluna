export const name="text_rotate_up-fill";
export const id="dl_4ebf4865f6d0fde1a9b8";
export const url=new URL("../icons/text_rotate_up-fill.svg?v=adb982fb460a2143e1c4e14700708dea129d28b7ea0f7518e2ea2c4ef0fe7522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
