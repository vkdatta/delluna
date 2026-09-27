export const name="arrow-line-down-light";
export const id="dl_93ce2fd069d14e69b8c0";
export const url=new URL("../icons/arrow-line-down-light.svg?v=6dc5b2177ec750bcf50e7e8bf9c8cf3993ab72a4d50adde6b9b7e6d1a9274255",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
