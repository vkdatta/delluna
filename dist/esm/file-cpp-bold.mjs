export const name="file-cpp-bold";
export const id="dl_2f6c12d6d432487d896b";
export const url=new URL("../icons/file-cpp-bold.svg?v=224903f77add6ae7b5740bf967358459773af438820f2aaad08a46ccba66f38d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
