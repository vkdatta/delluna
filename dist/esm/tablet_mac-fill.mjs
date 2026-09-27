export const name="tablet_mac-fill";
export const id="dl_8327f7a3a929560aad45";
export const url=new URL("../icons/tablet_mac-fill.svg?v=f4bdc52a511229092990ab36086f68841c67bbb715e46d113e5a584c84401760",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
