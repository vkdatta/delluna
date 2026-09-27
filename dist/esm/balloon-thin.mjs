export const name="balloon-thin";
export const id="dl_cd4b4667c5d14787bb51";
export const url=new URL("../icons/balloon-thin.svg?v=07f44f37428442aee3f5f2c008b7e3ffa6d6b25be6a96c967610c8966652fe42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
