export const name="light_group_2-fill";
export const id="dl_07e82c79bee38e2320cb";
export const url=new URL("../icons/light_group_2-fill.svg?v=0b7c71a930f6fc43687ee786674e05db9c4569a214e55935063a03b06677d521",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
