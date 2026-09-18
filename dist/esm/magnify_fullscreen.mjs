export const name="magnify_fullscreen";
export const id="dl_5ddf997d2f4847558e54";
export const url=new URL("../icons/magnify_fullscreen.svg?v=c3a20bb91070ff98264ee0df27ea6d7f7cb749a3f44e2da818bf8b6df51f98c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
