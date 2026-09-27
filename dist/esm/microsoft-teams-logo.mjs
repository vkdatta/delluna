export const name="microsoft-teams-logo";
export const id="dl_e8f7887de6e9411ab75d";
export const url=new URL("../icons/microsoft-teams-logo.svg?v=b8692559fca016e7d1874a710c1e55033e4620947c42b31355e071ad4022996d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
