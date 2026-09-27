export const name="lucid_2-drumstick";
export const id="dl_12bb75998b424731b03f";
export const url=new URL("../icons/lucid_2-drumstick.svg?v=35857c020ec69ce45ae9c0b17a73cbace35ffcba69b1de290c0b2b186f7b0681",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
