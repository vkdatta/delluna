export const name="text-a-underline-thin";
export const id="dl_17456012f2cfd66cb59e";
export const url=new URL("../icons/text-a-underline-thin.svg?v=5ec6193b97b8ba7bc84845cf4ca25196afe636c36b04cdfe31d1c8035d73016f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
