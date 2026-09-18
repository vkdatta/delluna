export const name="do_not_step";
export const id="dl_9c5252ec4185404cbdd1";
export const url=new URL("../icons/do_not_step.svg?v=689c1eab98e035a5c6cee13329728b1cd40c278a55f788f861437d2b16df92f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
