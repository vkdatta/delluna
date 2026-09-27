export const name="puzzle-piece-thin";
export const id="dl_6217985940b14db4ae0b";
export const url=new URL("../icons/puzzle-piece-thin.svg?v=c67c17147e0773b6a72e7ffd103427a1a52cd4025013347390f1a666a204ce34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
