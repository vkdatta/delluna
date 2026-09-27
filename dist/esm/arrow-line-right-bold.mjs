export const name="arrow-line-right-bold";
export const id="dl_b47bbd9ecfe342628f35";
export const url=new URL("../icons/arrow-line-right-bold.svg?v=0412c34312a61551f26d4890f5655a1680dc415e76d40833d09639564a89e4f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
