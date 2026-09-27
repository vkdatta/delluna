export const name="sticker-bold";
export const id="dl_6508d692c874d7752beb";
export const url=new URL("../icons/sticker-bold.svg?v=a228e68e80d7f668942aca01548bf14a813bec77927cac308fba3806dbbf040b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
