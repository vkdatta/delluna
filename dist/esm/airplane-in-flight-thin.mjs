export const name="airplane-in-flight-thin";
export const id="dl_efec250fba2a4e84b315";
export const url=new URL("../icons/airplane-in-flight-thin.svg?v=c6fba680b731c3fcca6e24b5e4af691cb546d64426f5dc63a46e939b8892a23d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
