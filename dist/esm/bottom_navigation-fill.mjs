export const name="bottom_navigation-fill";
export const id="dl_0a84d9a2424af7982ff8";
export const url=new URL("../icons/bottom_navigation-fill.svg?v=94d909f17ac76a96722c81480947e6c6d9b8cbfe2cae69fa5465feac86d42150",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
