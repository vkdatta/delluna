export const name="lucid_1-book-alert";
export const id="dl_7ad09abb75204bf4b514";
export const url=new URL("../icons/lucid_1-book-alert.svg?v=96b50439e5ca2b71ee15edc36ed1e18c0299a674b28c7018ab3a9067d2cea3e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
