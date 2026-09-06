export const name="arrow-fat-up-bold";
export const id="dl_8a2b33506c444268b0b7";
export const url=new URL("../icons/arrow-fat-up-bold.svg?v=a5bcc4cf8a430d47dc5e86332c75283a7df40358cfda705ae4c67091abd9f244",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
