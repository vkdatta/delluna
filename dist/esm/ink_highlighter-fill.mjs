export const name="ink_highlighter-fill";
export const id="dl_a59d4aabfb0d4f61a10e";
export const url=new URL("../icons/ink_highlighter-fill.svg?v=a9b72438bfc6c3193e4b23bbce1ae27012cfbc569b181cfbd7f4d4caa2d841ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
