export const name="messenger-logo-bold";
export const id="dl_c22ec784c35043e5a371";
export const url=new URL("../icons/messenger-logo-bold.svg?v=9663d1f16ceb0c6b67ee391b42ee95ded01d2bb0f7711ffb92a98656be3632c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
