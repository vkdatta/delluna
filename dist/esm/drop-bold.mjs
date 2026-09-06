export const name="drop-bold";
export const id="dl_2e1348cca6bd48a4a8be";
export const url=new URL("../icons/drop-bold.svg?v=23a7fb2e092cf171995dc4cc4da516a617c82f4e19aa6c4fc7aaa8235672720d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
