export const name="lucid_3-rectangle-ellipsis";
export const id="dl_4aeb35f4037e4cec93d5";
export const url=new URL("../icons/lucid_3-rectangle-ellipsis.svg?v=67f8ad1a24c5a2fb25d156462c1ac9675bd8655ec475bb9918a24a86f4561df3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
