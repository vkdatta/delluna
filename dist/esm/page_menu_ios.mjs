export const name="page_menu_ios";
export const id="dl_01d18c893a4753468a85";
export const url=new URL("../icons/page_menu_ios.svg?v=d17a897b6ba161a900dff9a18c5858494910686e0552755d48ea28a14d7dec8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
