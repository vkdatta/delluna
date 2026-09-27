export const name="first_page-fill";
export const id="dl_326fdf307595b38dcab8";
export const url=new URL("../icons/first_page-fill.svg?v=91763fba711084e547f7c8b90398db60dc697bd2b04f6e3d1fc8ea61076943a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
