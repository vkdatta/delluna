export const name="divide-duotone";
export const id="dl_78bc51f527ed4cc6a4b7";
export const url=new URL("../icons/divide-duotone.svg?v=9f8da427145d4dd1861c48b1534b8fa4f0493a86686a1804fbef9fe806a1ed64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
