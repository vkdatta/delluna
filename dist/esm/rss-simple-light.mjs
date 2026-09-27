export const name="rss-simple-light";
export const id="dl_a795126f75794691b579";
export const url=new URL("../icons/rss-simple-light.svg?v=0883c88c5b434ffb0d809145e5e1441b855efa8c00ff21b3763b0bd5e6423482",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
