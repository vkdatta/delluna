export const name="colorize";
export const id="dl_bbbbdedfbc477783ef12";
export const url=new URL("../icons/colorize.svg?v=7b42f6587a19a7c63634fc1562455e5140a30b32dd26a4fc4fb0cb79b25a0b9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
