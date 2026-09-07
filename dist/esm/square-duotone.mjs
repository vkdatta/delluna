export const name="square-duotone";
export const id="dl_ba822322bb7d4d97bc91";
export const url=new URL("../icons/S/square-duotone.svg?v=5241a61c6fc988763f87a84de7e91d9cfe29aa6f1f74fe71121c22f7ce96f199",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
