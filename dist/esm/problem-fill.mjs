export const name="problem-fill";
export const id="dl_684f7914d7e84ee69b25";
export const url=new URL("../icons/problem-fill.svg?v=ad2c3e1581de51bcc4797e777b5a1ab3565ed6d06f76128e3732c66478b98d5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
