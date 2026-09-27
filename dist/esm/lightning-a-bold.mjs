export const name="lightning-a-bold";
export const id="dl_6da23cc01dfc479da76d";
export const url=new URL("../icons/lightning-a-bold.svg?v=024895f1cee5335c48ae2d6fc2bdba14ba077a96ce9482d0ce0725e6f4df47f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
