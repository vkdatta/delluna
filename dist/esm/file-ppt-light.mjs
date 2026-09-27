export const name="file-ppt-light";
export const id="dl_fc69572bac5d4ea997d8";
export const url=new URL("../icons/file-ppt-light.svg?v=9b31ed3247c8eaba5efe43a09b2191950c0c1a2e9ae2a7eb8512d7886bc6967c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
