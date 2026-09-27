export const name="dropbox-logo";
export const id="dl_d0470d71fb6e4409ad4d";
export const url=new URL("../icons/dropbox-logo.svg?v=ff7c3afd76dd850921ea8d887c3901fd091999aa3c41f0688a5eb95a04a2a08a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
