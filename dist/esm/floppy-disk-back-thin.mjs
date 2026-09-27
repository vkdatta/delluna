export const name="floppy-disk-back-thin";
export const id="dl_c5756a23f8b441fea47c";
export const url=new URL("../icons/floppy-disk-back-thin.svg?v=90779a903140f616f5fb4764a4659e3e16f82f5dc653d8553e0588d10f0b7ffe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
