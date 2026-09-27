export const name="lifebuoy-bold";
export const id="dl_bbbb5828cff5450383fd";
export const url=new URL("../icons/lifebuoy-bold.svg?v=2e61dd63ab36803c18ba039dc102e12e376a8fd2a6e94b57720a232b01717ce1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
