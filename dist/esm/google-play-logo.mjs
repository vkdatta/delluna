export const name="google-play-logo";
export const id="dl_c84108562e8a4b4c9ecf";
export const url=new URL("../icons/google-play-logo.svg?v=dd3674947f52ecb6f03692b31263c03426de7355835838714e9f8b97f21d6166",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
