export const name="tv_remote-fill";
export const id="dl_950494cdfa7af94e83a0";
export const url=new URL("../icons/tv_remote-fill.svg?v=243433dcb6bf71432ae0e9b52f90b02b6c9c81bd78da0b84b193086ad18bb3c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
