export const name="dangerous";
export const id="dl_d2b8fcddbad1f2d4c1c9";
export const url=new URL("../icons/dangerous.svg?v=fa7b09689cb0df2609b9d5b547c3fc6dc075e700a0399387362dd512245408d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
