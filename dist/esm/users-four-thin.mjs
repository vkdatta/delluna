export const name="users-four-thin";
export const id="dl_f00bb61dfa74cfc7807e";
export const url=new URL("../icons/users-four-thin.svg?v=9d4f306a2d8eb06e2aa2c1532901662295cf4211ab1ebce15a7b54c27f75f30d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
