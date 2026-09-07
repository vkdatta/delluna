export const name="octagon-duotone";
export const id="dl_86902b80eef442c99e71";
export const url=new URL("../icons/octagon-duotone.svg?v=97648470cf81db9c11231c6bb4e0079ea5acd60b5bcd8942aaec5d51972f8ea5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
