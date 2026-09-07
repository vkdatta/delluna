export const name="user-sound";
export const id="dl_4da4091b27574d74978c";
export const url=new URL("../icons/U/user-sound.svg?v=a5fd1047c37a8a8acba24f447d31ed7e5c67c83592e9078da8c92538c0c28eb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
