export const name="swiss-franc";
export const id="dl_4f47dd52ae0c47d5adf9";
export const url=new URL("../icons/swiss-franc.svg?v=59c7b72b232a3f451b8e8e0a0103fd4a7849df7bc021331106c595d6216160a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
