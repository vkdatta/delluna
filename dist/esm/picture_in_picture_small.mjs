export const name="picture_in_picture_small";
export const id="dl_9cc1f872f953e31e34a7";
export const url=new URL("../icons/picture_in_picture_small.svg?v=65473e78f06a8d9b44d7c06f77650829d1c6e94a213ca6b400de6d6fb3b4752b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
