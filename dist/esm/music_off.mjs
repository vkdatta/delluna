export const name="music_off";
export const id="dl_40e56e3aa6b6e28dd65a";
export const url=new URL("../icons/music_off.svg?v=8e5f5201765652d92427d52019a34eca093da7d475d697c4648366f06be8e6af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
