export const name="lucid_2-gem";
export const id="dl_305910eccb354f089d79";
export const url=new URL("../icons/lucid_2-gem.svg?v=c420c1d27a3028eabb4559ff27fe78735a3db3f207bd832511df02b8fa2b49c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
