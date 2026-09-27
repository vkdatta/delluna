export const name="sentiment_stressed";
export const id="dl_cdfd56eab55ea8089e32";
export const url=new URL("../icons/sentiment_stressed.svg?v=fc2e512fe6956743bb9814566228a7a0b50dcdd7010be00a585e4ab949a1d830",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
