export const name="do_not_touch";
export const id="dl_f8f6a4bf27284b5fbc1e";
export const url=new URL("../icons/D/do_not_touch.svg?v=3a6b745d17068bcf5f86b4a90d1cf7213d6fdd55e3f17c721e043299629a9af2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
