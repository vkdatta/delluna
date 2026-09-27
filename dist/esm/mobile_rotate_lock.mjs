export const name="mobile_rotate_lock";
export const id="dl_ffac6233aebe142edaa8";
export const url=new URL("../icons/mobile_rotate_lock.svg?v=5b5f08811df2001985bd61e8aeb5e66bef74fe8bcfd6d32216f84935cd796246",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
