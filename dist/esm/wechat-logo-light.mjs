export const name="wechat-logo-light";
export const id="dl_e967e6cc986ec10161d4";
export const url=new URL("../icons/wechat-logo-light.svg?v=733514c4ffa7162fa840e2ced9d569fd4acf02562356f2728dd184a0edb4bad0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
