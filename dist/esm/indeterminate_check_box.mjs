export const name="indeterminate_check_box";
export const id="dl_d032c287bf3b1f5e67ae";
export const url=new URL("../icons/indeterminate_check_box.svg?v=e75af3c8b5589e5eed8d6388837d0599ed5f56e2c6ae78156f46b10357d71ebf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
