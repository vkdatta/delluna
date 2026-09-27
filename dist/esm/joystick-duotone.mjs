export const name="joystick-duotone";
export const id="dl_20e01f2956fb44b6b360";
export const url=new URL("../icons/joystick-duotone.svg?v=c9bc6fe8d3f3e8245730efa44f4b49ca4802c7b06aa1b4dc2a69151c2754bb9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
