export const name="smiley-x-eyes-thin";
export const id="dl_142d93ca151aee471da0";
export const url=new URL("../icons/smiley-x-eyes-thin.svg?v=47fccfe056d7ff8e05ecb9c2e16dd9b88af05c88ebaacb699c74ae6a1d40aa9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
