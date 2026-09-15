export const name="filter_retrolux-fill";
export const id="dl_e75942653f884c7aa624";
export const url=new URL("../icons/F/filter_retrolux-fill.svg?v=666fb600a5ce9bd68240827c42313e1b8906de9b97d03a78810bff0f394cee49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
