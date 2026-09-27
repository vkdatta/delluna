export const name="screen_rotation_alt-fill";
export const id="dl_fb9c84cfe9db7394b17f";
export const url=new URL("../icons/screen_rotation_alt-fill.svg?v=8b4a6cd144513f232b6c1881c7e2ffbfec0fa02dda4fbfbce5573c67e534933b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
