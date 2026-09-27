export const name="file-zip-light";
export const id="dl_ef9466bb28c2400b8294";
export const url=new URL("../icons/file-zip-light.svg?v=7615f5673a1204d4a96430be84b3ac9150972971822696396918f6f67589ee9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
