export const name="arrows-out-bold";
export const id="dl_53037649dc754c0287df";
export const url=new URL("../icons/arrows-out-bold.svg?v=7424ff4fcc10471e74fe8ccb99d70f381698f3931e0ddd0995fe1e883b60809c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
