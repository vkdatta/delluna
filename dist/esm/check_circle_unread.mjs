export const name="check_circle_unread";
export const id="dl_3e7bc6b2e8ba074ccb0e";
export const url=new URL("../icons/check_circle_unread.svg?v=cc2e20a458959178d5b1131f52d4be53fc5b69ac133a4b9bda4de2609dcb2b60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
