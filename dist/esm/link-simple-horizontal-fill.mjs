export const name="link-simple-horizontal-fill";
export const id="dl_62fcb9df65d6423eb2c7";
export const url=new URL("../icons/link-simple-horizontal-fill.svg?v=be8f352c4d4cb55dff9c34a2cfd4463a7776e37e8b320603f79deb09e61cc9a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
