export const name="octagon-bold";
export const id="dl_19d58ed8a3514ef5827c";
export const url=new URL("../icons/octagon-bold.svg?v=fbdcebb87873594507ea55fb5bb9aed3fa0ebcff79927fad8967e1ac264aacae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
