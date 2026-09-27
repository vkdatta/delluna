export const name="google-chrome-logo-bold";
export const id="dl_6907e819e1ac4523881f";
export const url=new URL("../icons/google-chrome-logo-bold.svg?v=394270b6012d93628ef5cf0878971e7d6b8ceda235e1708358caf5c982777450",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
