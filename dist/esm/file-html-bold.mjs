export const name="file-html-bold";
export const id="dl_41b4807db36143f2a6a6";
export const url=new URL("../icons/file-html-bold.svg?v=e99d2f8ad6e7822d4d5604ad83e70f39f8b17a43e57f64364fc0573c1edcf17e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
