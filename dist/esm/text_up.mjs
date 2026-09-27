export const name="text_up";
export const id="dl_aadf5f28d788521afcb9";
export const url=new URL("../icons/text_up.svg?v=8da4d31d146d6d928c57537315804ab7ebf445ef59848f21757f048277ac8ce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
