export const name="pentagram-bold";
export const id="dl_5661f6563c3245bf8cd0";
export const url=new URL("../icons/pentagram-bold.svg?v=1ab0a3ab564d506748add92c1cb039deb2f3ecdce91f2054734e6d6c9e918270",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
