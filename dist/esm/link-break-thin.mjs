export const name="link-break-thin";
export const id="dl_820f4f15917d4413a4ab";
export const url=new URL("../icons/link-break-thin.svg?v=188e56a38994d2a667ad0dfa588e1fa5e44c5cedf4beebadfeae585d7700bd35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
