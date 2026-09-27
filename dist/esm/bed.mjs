export const name="bed";
export const id="dl_7e0f933ebbf84468b866";
export const url=new URL("../icons/bed.svg?v=3f9c4861fee77e15d52191481721989594234006e15ae7f9ad4290f4f4681e0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
