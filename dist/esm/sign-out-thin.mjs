export const name="sign-out-thin";
export const id="dl_1ec8da6b5176973a180a";
export const url=new URL("../icons/sign-out-thin.svg?v=02820d9b28abac25a1e56949ed2ac988c5f737959dbbe96490e6f383457bf21a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
