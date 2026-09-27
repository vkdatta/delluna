export const name="lucid_2-hand-helping";
export const id="dl_8f63b8600ada4d209218";
export const url=new URL("../icons/lucid_2-hand-helping.svg?v=aac34f3381c464bb0172218f9f2193fb4ef68fe7c16dc0825a8d998bc32ff94a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
