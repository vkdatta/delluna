export const name="arrows-in-line-vertical-bold";
export const id="dl_2ad1e5ddc779472bb72a";
export const url=new URL("../icons/arrows-in-line-vertical-bold.svg?v=11b067f8d7ac05a78db0488144e70d5e652c31e9814cbc77175b531b79751c7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
