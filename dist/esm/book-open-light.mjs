export const name="book-open-light";
export const id="dl_f2d44744a56b40f4a1ab";
export const url=new URL("../icons/book-open-light.svg?v=b3c17b0fd57586acc8cecf4b7de8029e54343bf54cdbd9eba4d49199db5b3ef8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
