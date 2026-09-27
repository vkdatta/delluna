export const name="lips";
export const id="dl_29607e565a0f5508944a";
export const url=new URL("../icons/lips.svg?v=5868b9529701de33870d7b01609b8109ee55d8559d6fae55d5dbc161f376db99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
