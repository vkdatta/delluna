export const name="user-thin";
export const id="dl_7c2554b6a04621053c8b";
export const url=new URL("../icons/user-thin.svg?v=d64bc0f2d994e37b4ca3e9aff547cc5269face82e93f993975427999dc693991",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
