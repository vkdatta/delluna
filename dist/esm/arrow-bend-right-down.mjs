export const name="arrow-bend-right-down";
export const id="dl_5f491656cedf4fe5ae22";
export const url=new URL("../icons/arrow-bend-right-down.svg?v=687fbce25dd3ec4f64edcafb81a89fe4d426249a4763611f692bb4b9f466eb2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
