export const name="git-pull-request";
export const id="dl_54a66092a2864f5a918b";
export const url=new URL("../icons/git-pull-request.svg?v=7c8f27c4041840230aef03d7cfcae58c33dcebae5a7623b09220ccc0f8420815",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
