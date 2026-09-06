export const name="ghost-light";
export const id="dl_7f9c45306d2c40e5bbd2";
export const url=new URL("../icons/ghost-light.svg?v=ac299caa481d8ec1ad98792a68c4c6665d0b990a72e80da3569abdc8ee8ac8e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
