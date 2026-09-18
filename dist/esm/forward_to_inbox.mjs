export const name="forward_to_inbox";
export const id="dl_7655232f2177442083be";
export const url=new URL("../icons/forward_to_inbox.svg?v=039159393c2628ed8d945afe100350b0c36b9195b5f9c3a3969f293fccfa10ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
