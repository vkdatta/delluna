export const name="smiley-blank-fill";
export const id="dl_9b6aba7efbf8a9f6db12";
export const url=new URL("../icons/smiley-blank-fill.svg?v=5c033c934420dee35d857634bcbb0fa52e559ca5b8f2efffbe1af695227f97a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
