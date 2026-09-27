export const name="stylus_note";
export const id="dl_869a1ed725be13a6c1c4";
export const url=new URL("../icons/stylus_note.svg?v=02829b90327b821ed3c12beb08fb52abe720a32bbd121e29f6400bd64f094f7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
