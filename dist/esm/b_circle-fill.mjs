export const name="b_circle-fill";
export const id="dl_045c81be97a9ee9d48a7";
export const url=new URL("../icons/b_circle-fill.svg?v=3f6c6d9c9796396d90f822274a1be895e986f632fcee15537d9a0df3ffec4a48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
