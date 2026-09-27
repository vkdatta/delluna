export const name="carry_on_bag_inactive";
export const id="dl_6081201ec5426f269fbf";
export const url=new URL("../icons/carry_on_bag_inactive.svg?v=bfc466614e58bf9635af53651f8cc88614f4a7db92180d159a0a8450a00f0b62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
