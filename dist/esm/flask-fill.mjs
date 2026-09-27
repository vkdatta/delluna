export const name="flask-fill";
export const id="dl_cd82cd040dcf4a109bd5";
export const url=new URL("../icons/flask-fill.svg?v=9cbea214a10d8de372824d297fa4fb035bd2e4b371c700c6fad144b838dbb583",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
