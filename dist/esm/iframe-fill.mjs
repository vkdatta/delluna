export const name="iframe-fill";
export const id="dl_5c3aa628b96791e35ca7";
export const url=new URL("../icons/iframe-fill.svg?v=f290e6f386171b75eafd056fdf91fe9f506e91f9d4de2824cfbbcc913c9721c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
