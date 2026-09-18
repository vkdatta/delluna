export const name="girl-fill";
export const id="dl_0d7f8bd0a49345558123";
export const url=new URL("../icons/G/girl-fill.svg?v=1fb7d60fe5b385e45c759651b6af9d6cf6d966953072d2556df18684511a05f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
