export const name="bento";
export const id="dl_92a61fc3666695652768";
export const url=new URL("../icons/bento.svg?v=d07287abbb1bedfdc9bf1fdd19617cb4ec49d6d892425282d5f80741eaa1656f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
