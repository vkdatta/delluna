export const name="content_paste_search-fill";
export const id="dl_bcf971f6f8072750b330";
export const url=new URL("../icons/content_paste_search-fill.svg?v=b43a93e77809944d420616b54c810d8fb8e5e19b34ba2848e68f3c27d73a57e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
