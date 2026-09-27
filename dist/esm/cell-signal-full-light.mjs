export const name="cell-signal-full-light";
export const id="dl_e34ae881cdce4a108fd1";
export const url=new URL("../icons/cell-signal-full-light.svg?v=da3c5a355376f4344207997d62f5303994be6d4dd7ef3413268adb4a302953d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
