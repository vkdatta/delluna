export const name="respiratory_rate-fill";
export const id="dl_fa246a1e71efadf1943b";
export const url=new URL("../icons/respiratory_rate-fill.svg?v=ab4109366df5f184ec1f84cb2180fae071b4b2116bf07b7b6ba1bb9ffed57234",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
