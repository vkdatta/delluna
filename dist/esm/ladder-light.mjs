export const name="ladder-light";
export const id="dl_9d980fb15b8f4e09ad93";
export const url=new URL("../icons/ladder-light.svg?v=5aacd45cd80f0d899b555e4ea63bacbf66b3a2b3f2b4593ee1212c045ef98bf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
