export const name="x-square-fill";
export const id="dl_54da7daca0ac15c3bcdc";
export const url=new URL("../icons/x-square-fill.svg?v=b1e4bef1068cda37036e2c65c74f2d63a44a8551b5d55dc09eebf72676a722fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
