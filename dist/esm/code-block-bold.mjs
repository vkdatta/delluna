export const name="code-block-bold";
export const id="dl_e56f6f8d07ab47df890b";
export const url=new URL("../icons/code-block-bold.svg?v=0e7959f93afb3f6b21d2a1d01012869fe2f806de2ddb4bed6d4a1928c8aded17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
