export const name="3k";
export const id="dl_4fe595d614454e84cddd";
export const url=new URL("../icons/3k.svg?v=0043cd880aa4f3a5fa8eac6da3bbcfc2772e3d635afb393e6261e27feb943a76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
