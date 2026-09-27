export const name="chef-hat-thin";
export const id="dl_30d747ee525b4bdbaee2";
export const url=new URL("../icons/chef-hat-thin.svg?v=456bb7a2d05a27e27070570e0c58a7b7372da8f043538df987c9310e91ef8470",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
