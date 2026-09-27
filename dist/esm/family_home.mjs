export const name="family_home";
export const id="dl_e277f0b803cf6f788225";
export const url=new URL("../icons/family_home.svg?v=b0f0ad750cbb3a81b76ffa4d81d71201124650fc094a9311b37cf3a5c5bdde92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
