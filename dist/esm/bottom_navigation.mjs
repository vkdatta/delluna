export const name="bottom_navigation";
export const id="dl_f04aa143588e2f3bbbc5";
export const url=new URL("../icons/bottom_navigation.svg?v=9101f316c4b5ce94d0692bbd675ea464fcab033ac8de76ad48d1f63f7cd68954",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
