export const name="lock-simple-light";
export const id="dl_a700acc0272f4c45a992";
export const url=new URL("../icons/lock-simple-light.svg?v=08a0b62d8680f87a4e763272adb3ed195d5ded677971e31a75d27cd4540c095f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
