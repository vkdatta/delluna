export const name="lucid_3-rainbow";
export const id="dl_ba14e86e8c4f48bcbde9";
export const url=new URL("../icons/lucid_3-rainbow.svg?v=0736f83e80c2e571ea06a584942e54e6ebec106f93186f600e0f329be318ed48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
