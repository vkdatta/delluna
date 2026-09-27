export const name="cursor-click-duotone";
export const id="dl_2360548192c14abea3dc";
export const url=new URL("../icons/cursor-click-duotone.svg?v=e46bd133863df2963adfaf8a3d30d313a7d2c6d8a6b0b7f5b11db5eac9ed79ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
