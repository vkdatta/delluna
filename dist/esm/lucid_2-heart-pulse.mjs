export const name="lucid_2-heart-pulse";
export const id="dl_9f9f14d705d6423491dd";
export const url=new URL("../icons/lucid_2-heart-pulse.svg?v=b5321ec1c97ca83bc0802938ac4fd5f92caaad37b41b5c9bc9363576c8067323",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
