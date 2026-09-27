export const name="dots-nine-thin";
export const id="dl_05f45dfa54014dcf8c74";
export const url=new URL("../icons/dots-nine-thin.svg?v=5fb0e592515f9c71cd71f7a4d391776eb5c4c493f8be85013cefa09dcfa623cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
