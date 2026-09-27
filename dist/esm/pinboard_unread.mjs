export const name="pinboard_unread";
export const id="dl_cf45ccec88b6079b833d";
export const url=new URL("../icons/pinboard_unread.svg?v=a4de5568ec461683cfc9831abe75d20c940a01c098e27b22aeea0995e408cb2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
