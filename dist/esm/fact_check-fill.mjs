export const name="fact_check-fill";
export const id="dl_f44dd334ef4c4510ae62";
export const url=new URL("../icons/F/fact_check-fill.svg?v=d44770ac41a6c5b1b3df6b613ac72b7af259a1fca776a11ee5a15a6eac8d0bbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
