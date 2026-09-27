export const name="user-circle-minus-bold";
export const id="dl_d0768c6a2c64bd831cc3";
export const url=new URL("../icons/user-circle-minus-bold.svg?v=dd2e9364e1381b173be9c41d52c051720152f2e48128efffd2a125799e3a31c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
