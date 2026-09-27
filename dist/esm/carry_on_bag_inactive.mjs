export const name="carry_on_bag_inactive";
export const id="dl_e534f5dc676aa13794e5";
export const url=new URL("../icons/carry_on_bag_inactive.svg?v=2dd40153be9224701cf16ca82922cbe7b9617327ee93c3726c63577de9817caa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
