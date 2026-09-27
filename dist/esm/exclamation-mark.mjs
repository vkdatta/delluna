export const name="exclamation-mark";
export const id="dl_2866a7c003854f0e8f75";
export const url=new URL("../icons/exclamation-mark.svg?v=bed8e67e7a231d36822ac62399f651f6dfe965c43f292996f3a330b898fd31d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
