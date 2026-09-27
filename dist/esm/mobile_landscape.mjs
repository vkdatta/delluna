export const name="mobile_landscape";
export const id="dl_62fb8871da7f3208360c";
export const url=new URL("../icons/mobile_landscape.svg?v=1e3833e6022baeae53ee5313f34eca87718b997b2f8db3c9aef7e6f89ff492cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
