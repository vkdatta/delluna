export const name="phone-bold";
export const id="dl_c49d06e24e954fb7a45f";
export const url=new URL("../icons/phone-bold.svg?v=501e20bacd7a0bb8b470dbf7ff531f233bbb5015be75eeecfae32757dd29bf4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
