export const name="today";
export const id="dl_5da623a23cd4be7ad9bd";
export const url=new URL("../icons/today.svg?v=8be41e006b4531e01db53a4869ebcd399f70133e0913b1dd28bcd28d4926a3c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
