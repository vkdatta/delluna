export const name="add_road-fill";
export const id="dl_106b014268054506b844";
export const url=new URL("../icons/A/add_road-fill.svg?v=66b755bbb381293c87ab6c0abac9f5b14d12c31933969eefe827af0586c2ced6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
