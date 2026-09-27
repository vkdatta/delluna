export const name="edit_calendar-fill";
export const id="dl_aa04f9eef04efa1c3595";
export const url=new URL("../icons/edit_calendar-fill.svg?v=18ee63c3b08ffdfdce1e54a066e530251713f0d5988687bbf5ac751f8be72095",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
