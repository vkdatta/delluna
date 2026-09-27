export const name="google-chrome-logo-light";
export const id="dl_954f41f21d7d4828bb37";
export const url=new URL("../icons/google-chrome-logo-light.svg?v=98641b94ebca083f1b8253c30087ffd9d35db03b13ead3fc4eb8cd1a4f55a6a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
