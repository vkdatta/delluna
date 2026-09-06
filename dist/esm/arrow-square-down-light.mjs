export const name="arrow-square-down-light";
export const id="dl_c39699f5648c47698c3c";
export const url=new URL("../icons/arrow-square-down-light.svg?v=01f7633a4b5e94383bd0b2d969856bb80f0ef1694cb5c7b03b23d7aaffde1fe0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
