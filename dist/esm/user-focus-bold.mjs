export const name="user-focus-bold";
export const id="dl_aa2bd3e065bb420c9eb3";
export const url=new URL("../icons/U/user-focus-bold.svg?v=9759d9eee2f0f945f65b765c741cbbedfc17e57928ebc7277907eeb64d536dd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
