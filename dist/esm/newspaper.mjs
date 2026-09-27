export const name="newspaper";
export const id="dl_5f61da5328eb4ebfb6f3";
export const url=new URL("../icons/newspaper.svg?v=c67c0fb682f93ca7aba5dd8e0ea70ded9a3a3629929f18165fcb5b34aa6c63e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
