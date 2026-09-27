export const name="dermatology";
export const id="dl_6471852bdb645ab9cac4";
export const url=new URL("../icons/dermatology.svg?v=1bdba3d9a65ad26b6d204b2338d2cbee0fb2d22d69bd6d0df1f5f1300655f4d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
