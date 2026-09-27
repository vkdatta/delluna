export const name="paragraph-bold";
export const id="dl_526652a6fe554c67bcf2";
export const url=new URL("../icons/paragraph-bold.svg?v=cae8fecbfd95e364747187df2bc8f41b54c30a51fdb4481a6aea379f5d4318fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
