export const name="all_inbox-fill";
export const id="dl_a5af0cae341b75f96ed1";
export const url=new URL("../icons/all_inbox-fill.svg?v=f7298974bb81f7a1ffdf9b08e59e1456ee8fde6f5c31fd4a316f207d1071b10a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
