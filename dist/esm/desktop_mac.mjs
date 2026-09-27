export const name="desktop_mac";
export const id="dl_1309a558e0c46b6512e1";
export const url=new URL("../icons/desktop_mac.svg?v=2e0d5f118dc399953de87dd26176cc65b9e61d26ef46395f3f1919e61368cc03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
