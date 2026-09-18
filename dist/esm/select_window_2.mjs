export const name="select_window_2";
export const id="dl_13b38ba054cf49d0a8db";
export const url=new URL("../icons/select_window_2.svg?v=da598f0bba28e906ab2541f8d51463fd20508908a39f33fee318845372962790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
