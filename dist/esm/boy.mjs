export const name="boy";
export const id="dl_8d7c0f57acb7bcd0068a";
export const url=new URL("../icons/boy.svg?v=531c804e915fe569c90156da934b8b1d6245a5447176b45cbc9691f57dff477b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
