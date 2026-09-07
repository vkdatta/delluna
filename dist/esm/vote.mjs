export const name="vote";
export const id="dl_a02fcd238f0048e19fa7";
export const url=new URL("../icons/vote.svg?v=16d0f9651a9527f69c1c51fb8b411b9e294e4ad4ee9dd94ceb06a1ece7f06a08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
