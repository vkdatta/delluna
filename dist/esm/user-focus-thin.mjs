export const name="user-focus-thin";
export const id="dl_d198ee1448add41d3d54";
export const url=new URL("../icons/user-focus-thin.svg?v=575ad525df9c304bba31b67aedd854e805d61e3967ba3f07d0ca023514881261",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
