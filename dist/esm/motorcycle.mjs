export const name="motorcycle";
export const id="dl_dd37ed162c9645779556";
export const url=new URL("../icons/motorcycle.svg?v=43c245e89e59ea5636568c9eb43ff72ec43b8f6cfc0c20ec1001d11af38f1533",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
