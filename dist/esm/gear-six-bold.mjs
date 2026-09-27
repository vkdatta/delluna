export const name="gear-six-bold";
export const id="dl_c76447c0cf4c44f48439";
export const url=new URL("../icons/gear-six-bold.svg?v=68a224b1c1c85f70bed4d5e15b835d1546a425fd835bfca391436c5dff299344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
