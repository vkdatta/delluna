export const name="arrow-u-left-down-bold";
export const id="dl_a0a625318373425c9e71";
export const url=new URL("../icons/arrow-u-left-down-bold.svg?v=3fc8c70a1cfa6de3563a27922e97a3e386d952d4f8d43b107664870c8b40a505",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
