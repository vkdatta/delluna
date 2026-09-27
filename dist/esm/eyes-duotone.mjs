export const name="eyes-duotone";
export const id="dl_d4c34cb175374290abcf";
export const url=new URL("../icons/eyes-duotone.svg?v=ecd99efe88be57e1d6681378ccdb0f02aa0a322cb783227a58dfca93bc87b107",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
