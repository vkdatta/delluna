export const name="do_not_touch";
export const id="dl_b4c7b7ab88cd9106d996";
export const url=new URL("../icons/do_not_touch.svg?v=3a6b745d17068bcf5f86b4a90d1cf7213d6fdd55e3f17c721e043299629a9af2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
