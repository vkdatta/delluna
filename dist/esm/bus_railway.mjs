export const name="bus_railway";
export const id="dl_49a9bf0fb337443b9044";
export const url=new URL("../icons/bus_railway.svg?v=58c22e6d9a7cab642e2c08f47ad01a24a2228bc178bc59bdc274a1fdf85c3202",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
