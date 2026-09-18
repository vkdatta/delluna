export const name="outbox_alt";
export const id="dl_5bd29cdcb06444ef819c";
export const url=new URL("../icons/outbox_alt.svg?v=0f7d31ddf2b0bfe583c5ab7be38c0ac1246c8fdfd40875647bee1acf81179e2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
