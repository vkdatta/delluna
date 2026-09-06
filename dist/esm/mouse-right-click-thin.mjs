export const name="mouse-right-click-thin";
export const id="dl_7125743817f34276bf53";
export const url=new URL("../icons/mouse-right-click-thin.svg?v=4d4cb75665b8bdcff5e80eb952d4afa19078ebeaafe92ae929d9deeabc88162a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
