export const name="no_luggage-fill";
export const id="dl_65d51bd42b69a9f34504";
export const url=new URL("../icons/no_luggage-fill.svg?v=57b139442b9e94eef83c05a2d59551dd009104202b8ca40c7df2eeca511ca33b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
