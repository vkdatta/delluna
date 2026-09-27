export const name="lucid_1-check";
export const id="dl_19037d8510ca4be0a45a";
export const url=new URL("../icons/lucid_1-check.svg?v=806b9886c51565b24125d56f1a051e323b0dcfd7a77bcf9613db479e5ea34044",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
