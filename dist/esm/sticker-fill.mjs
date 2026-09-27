export const name="sticker-fill";
export const id="dl_5e6bb827745fb48c3215";
export const url=new URL("../icons/sticker-fill.svg?v=d0b3a911ce58310f84504ab5d68759bc9614c5029bb690cf879582938112737d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
