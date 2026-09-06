export const name="hard-drive-thin";
export const id="dl_b828dce2a9734ea4ab10";
export const url=new URL("../icons/hard-drive-thin.svg?v=635e1654aa50946b21fcb71e08b0149fa0d86ec243558a8f1af82af218935870",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
