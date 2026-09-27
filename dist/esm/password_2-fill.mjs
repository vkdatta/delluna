export const name="password_2-fill";
export const id="dl_158c301965167701d52b";
export const url=new URL("../icons/password_2-fill.svg?v=9deb3347bc5fa55b2ff4def75403d9c4cf366718469f6811d0e7f3884fca8379",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
