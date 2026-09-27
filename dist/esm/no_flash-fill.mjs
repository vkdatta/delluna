export const name="no_flash-fill";
export const id="dl_6dfac35113e515cba1be";
export const url=new URL("../icons/no_flash-fill.svg?v=d423da1d11ad8c9638bedcb55b2757a21291f8f55cdbfdd29cf86e74ded281b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
