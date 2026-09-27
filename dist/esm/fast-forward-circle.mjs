export const name="fast-forward-circle";
export const id="dl_9e5faadf48334db1a03b";
export const url=new URL("../icons/fast-forward-circle.svg?v=b5d1147e4a85ec5ee95cff1b908adbdab0041ba08f97ec7f68c23c53a0546522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
