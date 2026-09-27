export const name="eraser_size_3-fill";
export const id="dl_c48649eaf674cc4bac98";
export const url=new URL("../icons/eraser_size_3-fill.svg?v=aba03476f9866cec7caade50b1ec6373436f712b0183e15f0a5c2eb1be9c70c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
