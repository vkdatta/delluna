export const name="user-plus-thin";
export const id="dl_409c216ce95d72838225";
export const url=new URL("../icons/user-plus-thin.svg?v=c881e3f4b647f7d022f758629bd2c0f8100a430612b3a220de857d55808f7f81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
