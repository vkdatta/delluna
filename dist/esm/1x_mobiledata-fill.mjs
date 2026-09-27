export const name="1x_mobiledata-fill";
export const id="dl_f095e5ed41aea3cb7986";
export const url=new URL("../icons/1x_mobiledata-fill.svg?v=0ed363e8de6920e82475dacf9537ff0526e15f52403392a5f6a23a7953a0a17e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
