export const name="tumblr-logo";
export const id="dl_2416b839ec81c7135a30";
export const url=new URL("../icons/tumblr-logo.svg?v=7269d4813991a32c39ca04994e8e09cd1d1a1ae0428a5ff4a4ec3fc7ec369874",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
