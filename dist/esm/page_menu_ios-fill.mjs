export const name="page_menu_ios-fill";
export const id="dl_f6ed4b60c46349ce9dbb";
export const url=new URL("../icons/P/page_menu_ios-fill.svg?v=03fd7ce7e6f3bcafdc30cca93a92948fb15fde04bdb95daeb8ba97d2843d5f8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
