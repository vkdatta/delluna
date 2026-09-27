export const name="subwoofer-fill";
export const id="dl_ebfbb6cc2e6b5a4deba8";
export const url=new URL("../icons/subwoofer-fill.svg?v=35f3df48bd3295932d05db790848244a019cea96d68463de6a7f8d8d18604b48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
