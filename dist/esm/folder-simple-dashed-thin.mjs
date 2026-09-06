export const name="folder-simple-dashed-thin";
export const id="dl_fbccedaa3092412fae67";
export const url=new URL("../icons/folder-simple-dashed-thin.svg?v=d3b642b1c328e86ac34ac871d78712a61487749dcbe36c9e927b50ae099d0d0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
