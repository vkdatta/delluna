export const name="insert_page_break";
export const id="dl_84a0acda82e757c2fc0b";
export const url=new URL("../icons/insert_page_break.svg?v=79bc7bc974b5b1be0da1a8627b9d558cd6ffc310a55b0f5742987e91c732d4d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
