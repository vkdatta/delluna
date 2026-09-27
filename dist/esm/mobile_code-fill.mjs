export const name="mobile_code-fill";
export const id="dl_adb556c017b5f660a525";
export const url=new URL("../icons/mobile_code-fill.svg?v=c5f06d6e3feac6f60a769e1212e7859430845b18c5aaa338a19cd5447d98af41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
