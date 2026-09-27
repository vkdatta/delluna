export const name="view_list";
export const id="dl_6c8f2f5298e5a4ab3f94";
export const url=new URL("../icons/view_list.svg?v=d397bab0259a4171f354cef6d56d731a11351fb58c4102f03dbd6d08de7605b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
