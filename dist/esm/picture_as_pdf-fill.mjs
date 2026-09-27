export const name="picture_as_pdf-fill";
export const id="dl_431bbc83b5c86b08664d";
export const url=new URL("../icons/picture_as_pdf-fill.svg?v=a744fc1ddbad8205f3c91da798e3ca4c876b9511380e99b26b04648c4bb1cefc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
