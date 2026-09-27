export const name="more_up";
export const id="dl_aabb8ee8e6d59d2001f2";
export const url=new URL("../icons/more_up.svg?v=95c9dfc0b28e88fd945785030955e4c34fe55fee7fc9db4e440a9c24c0cc0e62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
