export const name="trending-up";
export const id="dl_5b95424ac8344d6b865d";
export const url=new URL("../icons/trending-up.svg?v=99381bdc2c7f7378ce108c6eb3096f909ece7431125470d6a7790d59361c10e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
