export const name="user-circle-gear-duotone";
export const id="dl_cf8c10add22442aea552";
export const url=new URL("../icons/U/user-circle-gear-duotone.svg?v=f36f1e3659aa9c3b49963e5a2af383d590cd60cde09b9bf600ddc3c0b4164dec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
