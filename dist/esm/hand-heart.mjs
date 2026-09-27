export const name="hand-heart";
export const id="dl_f90552daef4146ad86d0";
export const url=new URL("../icons/hand-heart.svg?v=43c69f6679dea8011df1c625d55515fa942f668ad30483828ce92e6e294cb0d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
