export const name="lucid_2-lock";
export const id="dl_a65d9ca60b2f4542a958";
export const url=new URL("../icons/lucid_2-lock.svg?v=1508bb278962fc11bce6c3ba7321c69f15f29cae882bacc758e716e5e7c98c71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
