export const name="user-circle-thin";
export const id="dl_1a20f3b74a685b555a6b";
export const url=new URL("../icons/user-circle-thin.svg?v=e048aae0b17010c4b5775e0fe52d9da4909ed7f8b6ba8402732078842319d176",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
