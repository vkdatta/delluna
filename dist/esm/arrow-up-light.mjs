export const name="arrow-up-light";
export const id="dl_2467e144911d4e7bbca1";
export const url=new URL("../icons/arrow-up-light.svg?v=c7c03da96fe1a6c852e3307ebe018676b4e10da8d45686484f3cf9fe24889d8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
