export const name="stack-plus-fill";
export const id="dl_921fb67d458a45ed793a";
export const url=new URL("../icons/stack-plus-fill.svg?v=00c50b28165c6abf22455b4d7a66c171afbb1a09ed5ddf4cbde1f147529a4b19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
