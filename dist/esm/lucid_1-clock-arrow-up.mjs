export const name="lucid_1-clock-arrow-up";
export const id="dl_36714a94655b422fa810";
export const url=new URL("../icons/lucid_1-clock-arrow-up.svg?v=2f36a1f5644cbb9975510442f9377729ac4b9444c01b1bce4ae550f7994ea28c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
