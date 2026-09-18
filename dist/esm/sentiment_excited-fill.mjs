export const name="sentiment_excited-fill";
export const id="dl_90f371157ae944c998fc";
export const url=new URL("../icons/sentiment_excited-fill.svg?v=3169f6f67f98c6feaefb3ad8628940ee713ca0c92119d573b2b447859a985cad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
