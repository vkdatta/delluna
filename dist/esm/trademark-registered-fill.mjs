export const name="trademark-registered-fill";
export const id="dl_ce047d38dc969793925c";
export const url=new URL("../icons/trademark-registered-fill.svg?v=fb699e0404e721dc9438da98ac7cc25e73de9aec52ca7214088c4a43fecc32c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
