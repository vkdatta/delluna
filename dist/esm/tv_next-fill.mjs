export const name="tv_next-fill";
export const id="dl_f131faa78d644d0194e4";
export const url=new URL("../icons/tv_next-fill.svg?v=c945f26accce83bba1dc5dda841b253d8519a66f5091053db4b4a3c3285d3941",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
