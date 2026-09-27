export const name="clipboard-duotone";
export const id="dl_2dd92037fa2043a8832b";
export const url=new URL("../icons/clipboard-duotone.svg?v=84701afc0d9e24822734e9d8af446923d5b5c6a70d3b9b6f6db3fc6872d2cbc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
