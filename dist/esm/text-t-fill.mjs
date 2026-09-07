export const name="text-t-fill";
export const id="dl_f6e133956f374e3c8535";
export const url=new URL("../icons/T/text-t-fill.svg?v=676b1a49f997696f0c2b15a17c8b3e71733854b220e7fa5a15dd27ef0cf499f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
