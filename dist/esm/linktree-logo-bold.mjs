export const name="linktree-logo-bold";
export const id="dl_847fa745eb924802badf";
export const url=new URL("../icons/linktree-logo-bold.svg?v=d21326f79ba4d265891a88aa8c9c10e80fed36d1c1dd7a65b6a677ff4c7afdfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
