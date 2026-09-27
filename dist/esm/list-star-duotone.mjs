export const name="list-star-duotone";
export const id="dl_da4666a0d6a54fb7883d";
export const url=new URL("../icons/list-star-duotone.svg?v=7a2f5d7adbf547bcb1fdde0a1ba20c046009f17ce85537c8890834a3ab62d50a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
