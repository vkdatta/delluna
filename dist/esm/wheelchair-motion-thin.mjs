export const name="wheelchair-motion-thin";
export const id="dl_94ff15226004a0b3bad8";
export const url=new URL("../icons/wheelchair-motion-thin.svg?v=ab83ac911563b8455b41a22ed9f994cca00ed976d74b84d4c12d741b75fc92a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
