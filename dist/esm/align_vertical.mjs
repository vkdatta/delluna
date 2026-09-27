export const name="align_vertical";
export const id="dl_3443b5015dffd7adfdb0";
export const url=new URL("../icons/align_vertical.svg?v=5751be386a05d2411d594d10f3e4703e41bc48e73e25bcb7569bd84eccf9f346",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
