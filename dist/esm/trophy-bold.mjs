export const name="trophy-bold";
export const id="dl_53d5023548ec4b3296f1";
export const url=new URL("../icons/trophy-bold.svg?v=4ee91bbb53aabd569430feaf05dfc34ac55c9f8f94d053a4f37ed8c507e72513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
