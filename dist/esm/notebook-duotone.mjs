export const name="notebook-duotone";
export const id="dl_a826e6cdd1ec4f4ca0f7";
export const url=new URL("../icons/notebook-duotone.svg?v=3c76730318bc18032c32388352e952a218a7b6eb46f7ab83e8dfb34270b3129b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
