export const name="subtract-square";
export const id="dl_b66a5d25cb769629c3d9";
export const url=new URL("../icons/subtract-square.svg?v=a30218d137233d3dbedfd73871608be7317918c8148c9faf0157ac548046b003",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
