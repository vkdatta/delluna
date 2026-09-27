export const name="how_to_vote";
export const id="dl_5114c448d81f584ff45c";
export const url=new URL("../icons/how_to_vote.svg?v=2b6f8ce3b2b26444ac73ecd718872f80fc0a114087575083317a466d60d31e13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
