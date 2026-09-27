export const name="key-return";
export const id="dl_198e62c149104800b1ba";
export const url=new URL("../icons/key-return.svg?v=c046f973654fb7fdd3e89b542a2a5df5b73128db1f94108ae46dc9cb823698a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
