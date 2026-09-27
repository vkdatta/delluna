export const name="local_post_office";
export const id="dl_d2eb1720027c1b224e66";
export const url=new URL("../icons/local_post_office.svg?v=855021c9c295543c5f17a8ec1c9bd1a5dca8791b3633b1cab5ae600ae6feb950",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
