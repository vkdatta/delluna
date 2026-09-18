export const name="perm_media";
export const id="dl_057c888675fc45859a7e";
export const url=new URL("../icons/perm_media.svg?v=ae121df67567ff6ff32506ba9c42fdd9f945e394daf9921e98d5bd78616f4e99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
