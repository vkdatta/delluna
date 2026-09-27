export const name="text-t-slash-fill";
export const id="dl_575fb88c2e172c042b5a";
export const url=new URL("../icons/text-t-slash-fill.svg?v=2aaa23762d4419dbf9f8f91a6f7e93b31433079dc1829da72e27b642a68bbcf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
