export const name="avocado-thin";
export const id="dl_5708255060284decb9b2";
export const url=new URL("../icons/avocado-thin.svg?v=2bc558922dd919c3f30d42b233f0fd0dc6a7b7e93ab65e34a5b79fdd0bb0a945",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
