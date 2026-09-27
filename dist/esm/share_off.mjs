export const name="share_off";
export const id="dl_aa0282c298062cf475ec";
export const url=new URL("../icons/share_off.svg?v=9e6be8a4b8bf50fe42322cd7e5b5cf5645fc3496814c258d5bfb43fb1e9a4f7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
