export const name="check_circle_unread";
export const id="dl_d2dff77118f84f4fb7b3";
export const url=new URL("../icons/check_circle_unread.svg?v=62437ae5b8e2e6d182cd4954a47f3659615b6260dd03183b626f92c4012dd947",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
