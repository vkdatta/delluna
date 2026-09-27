export const name="arrow-bend-up-left-fill";
export const id="dl_4d031905e93944489a52";
export const url=new URL("../icons/arrow-bend-up-left-fill.svg?v=69d8f5ca649e233455b026a9a54f8fb66cd7fffaf817a38e45b7f6ccea4c9df5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
