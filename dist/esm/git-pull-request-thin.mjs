export const name="git-pull-request-thin";
export const id="dl_9e5937c3585a46a99141";
export const url=new URL("../icons/git-pull-request-thin.svg?v=8c23dc60442c1d9f03f8201f39a9e6ad93dc5eba36c19a8cffca22e926a271a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
