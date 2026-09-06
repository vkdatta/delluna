export const name="fire-thin";
export const id="dl_6192728035eb454f8da0";
export const url=new URL("../icons/fire-thin.svg?v=455f06a4d470bd10efe3c94d5f8e2975edb2956813a1855bd2eed25580eeb93e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
