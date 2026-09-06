export const name="git-branch";
export const id="dl_226f38bf82c841a8b4cd";
export const url=new URL("../icons/git-branch.svg?v=3aaa3ec833418cdce445f8e1f901ab4021a9de02264610563e51e7109511b816",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
