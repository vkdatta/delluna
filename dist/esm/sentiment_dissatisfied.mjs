export const name="sentiment_dissatisfied";
export const id="dl_36f38c35cecd5e03a641";
export const url=new URL("../icons/sentiment_dissatisfied.svg?v=b827b0650384d02ea127d42540a91f882c2da908863a9f6d3174bc7d0770299f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
