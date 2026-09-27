export const name="box-frame-plus";
export const id="dl_cd27729d16fc629a9774";
export const url=new URL("../icons/box-frame-plus.svg?v=637c1d859b66436918d59d6e42c7fccc5f72dee05910ea3b27a4ce60beacc238",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
