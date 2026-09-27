export const name="emoji_nature";
export const id="dl_e1c92e38370d0ac07355";
export const url=new URL("../icons/emoji_nature.svg?v=92a8ae93303e2921c2dd5082fee1096c30666d4dfc685c39027cf808abe49195",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
