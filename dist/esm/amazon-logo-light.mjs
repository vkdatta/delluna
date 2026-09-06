export const name="amazon-logo-light";
export const id="dl_ea69d4c45d594439a4aa";
export const url=new URL("../icons/amazon-logo-light.svg?v=71117eb8bd7b8a4c15ea13edfcba699f08e245b36a03e62f6774db31fdfff3f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
