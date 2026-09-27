export const name="cigarette-slash-light";
export const id="dl_7ddc94b9a6024fca93c1";
export const url=new URL("../icons/cigarette-slash-light.svg?v=9e8ef07037a1a43fd2c576147a66641cf48b2a360b9b98319f7d7b3a809b59e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
