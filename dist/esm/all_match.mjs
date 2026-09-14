export const name="all_match";
export const id="dl_2a6225bf9afd48de86e5";
export const url=new URL("../icons/A/all_match.svg?v=b0793a144710eead17fd866fe69bcc673f0f5551f103609e7eeaba8bd002ebee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
