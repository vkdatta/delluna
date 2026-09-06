export const name="caret-circle-down-duotone";
export const id="dl_7a959baaabc644f79d54";
export const url=new URL("../icons/caret-circle-down-duotone.svg?v=e8b933b5970525a0414d57dd01f95082b1f389e6c43ca6f3ee60186c823fea7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
