export const name="indeterminate_question_box-fill";
export const id="dl_3a783dc0865d61d034b3";
export const url=new URL("../icons/indeterminate_question_box-fill.svg?v=e3c8076d6e3dd68a1586526e208d495fdacf090c914454608521f294aee4facd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
