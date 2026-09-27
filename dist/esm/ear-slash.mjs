export const name="ear-slash";
export const id="dl_fd1c031908fa404db19c";
export const url=new URL("../icons/ear-slash.svg?v=57ee46304367a257c9e6289386765cf84b149e9caebecb36177bf271347797f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
