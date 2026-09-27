export const name="arrow-u-down-right-light";
export const id="dl_f1a0f2993e504379ba22";
export const url=new URL("../icons/arrow-u-down-right-light.svg?v=fcdb62ef4e8531838917ab1ee5e3cd2a0d67dc75571da3443d118ad0d6b9fe67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
