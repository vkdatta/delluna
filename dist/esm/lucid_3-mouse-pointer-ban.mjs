export const name="lucid_3-mouse-pointer-ban";
export const id="dl_10c6648671134cf0aab4";
export const url=new URL("../icons/lucid_3-mouse-pointer-ban.svg?v=e12d326313e1df53210dbf762179edfddb40f4c5aba3bdfe5cebfa0cef4876a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
