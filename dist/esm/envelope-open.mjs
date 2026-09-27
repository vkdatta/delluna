export const name="envelope-open";
export const id="dl_4044b787205b4bff9882";
export const url=new URL("../icons/envelope-open.svg?v=2a46a9ac07400b76bd36df2fa1209b6fb4d171b725850d58da3b8a9fcea5ab88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
