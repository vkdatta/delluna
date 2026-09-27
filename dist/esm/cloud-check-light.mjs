export const name="cloud-check-light";
export const id="dl_8b1ba63125564423af42";
export const url=new URL("../icons/cloud-check-light.svg?v=2d77e83a051839bf65127d172711437c71019cbfbeb1589599030fbb8b8e29bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
