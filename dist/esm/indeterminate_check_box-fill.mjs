export const name="indeterminate_check_box-fill";
export const id="dl_fb9a7839531728944243";
export const url=new URL("../icons/indeterminate_check_box-fill.svg?v=3f83348f9490a378b2f7ef299888f76debc425442ad251e7e6cfe834fe28de98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
