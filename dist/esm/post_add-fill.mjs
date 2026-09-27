export const name="post_add-fill";
export const id="dl_d6264aa794f0520e3998";
export const url=new URL("../icons/post_add-fill.svg?v=1b6d08f40403f64cb9de6648a27acc69dccc721b4849101cec6f3bc736b70588",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
