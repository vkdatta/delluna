export const name="immunology";
export const id="dl_9d02e8d448006eff9a58";
export const url=new URL("../icons/immunology.svg?v=bd08be3908ad17e3b7b05f34a9ef89e43de3ef40e4a87902bbd8b36ae7069bd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
