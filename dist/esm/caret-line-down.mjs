export const name="caret-line-down";
export const id="dl_b568c75c45914327af1d";
export const url=new URL("../icons/caret-line-down.svg?v=d3731fa8a96170e4f40fb62c98387c4bbbf3b21c647aeb4d3733c8989e04a085",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
