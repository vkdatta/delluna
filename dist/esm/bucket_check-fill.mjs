export const name="bucket_check-fill";
export const id="dl_c51e5427c553d8a5e20c";
export const url=new URL("../icons/bucket_check-fill.svg?v=ccc695bb18a039b1ff41001dfa591452464f1df594c97e71baf6fa0a699e3f9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
