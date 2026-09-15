export const name="business_messages-fill";
export const id="dl_c0a3277c36224879abcb";
export const url=new URL("../icons/B/business_messages-fill.svg?v=8069fb1435e312edad26f6c78d8a54b29e94810a80de43cbc1cee38308175776",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
