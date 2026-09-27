export const name="seal-check";
export const id="dl_6c9e4bedf647fc6e628d";
export const url=new URL("../icons/seal-check.svg?v=44eab59d5ea28b75965acb47f4ec55ab09a722e450bb05df52da7811b2e0b9ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
