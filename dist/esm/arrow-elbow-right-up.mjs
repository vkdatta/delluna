export const name="arrow-elbow-right-up";
export const id="dl_badb54b4c740421eb70b";
export const url=new URL("../icons/arrow-elbow-right-up.svg?v=958c86b98c8c3c43cdf4cb896be05cdd827ca995b3da6a764eac7c8f8067ee23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
