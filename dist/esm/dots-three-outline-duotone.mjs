export const name="dots-three-outline-duotone";
export const id="dl_ec93b84bd2d94d4e93d5";
export const url=new URL("../icons/dots-three-outline-duotone.svg?v=85bf297767c5a25d866425555790e96d713b71c0f46fd295f80c511e6d5c6986",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
