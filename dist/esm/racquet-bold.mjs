export const name="racquet-bold";
export const id="dl_e2598e36a5ee483c9053";
export const url=new URL("../icons/racquet-bold.svg?v=cc189f0ffe5885d49834dc22cc0c2422312f4cd0b272ab4917ab1ad1c9d11115",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
