export const name="arrow-fat-right";
export const id="dl_5fd54532a69543b5b69c";
export const url=new URL("../icons/arrow-fat-right.svg?v=00d0eb0f6a3100fc0109a1c4429839ba773ca6af0a0345489ad3a8316f984557",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
