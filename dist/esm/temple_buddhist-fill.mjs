export const name="temple_buddhist-fill";
export const id="dl_c42ce2cc1ff9c8f10b5c";
export const url=new URL("../icons/temple_buddhist-fill.svg?v=e76de9d500c098d5fc5dce59a8779da50e288f28f43d9989a838867508b7d9b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
