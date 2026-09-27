export const name="book-open-text-light";
export const id="dl_97c49c0d1ad140d080c6";
export const url=new URL("../icons/book-open-text-light.svg?v=cc0f4cb0aca3d9844f5bc258f110286e713aa063b69e4113ead36855e7024790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
