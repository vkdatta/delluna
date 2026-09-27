export const name="dots-nine-thin";
export const id="dl_05f45dfa54014dcf8c74";
export const url=new URL("../icons/dots-nine-thin.svg?v=9f55bffa3422692a24e6a71672b058a0a85e59a670cfbc8e49924c8eff9d51dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
