export const name="file-dashed-thin";
export const id="dl_69175d763e9a46a69945";
export const url=new URL("../icons/file-dashed-thin.svg?v=d96778c619469fc96567fe6fffcac70fd725e74446405bc742c676f68c73ee3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
