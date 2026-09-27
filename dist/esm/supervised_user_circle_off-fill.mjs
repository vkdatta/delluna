export const name="supervised_user_circle_off-fill";
export const id="dl_e847b958ada834f15d49";
export const url=new URL("../icons/supervised_user_circle_off-fill.svg?v=6547264aacd04c356a74179847ded649a9509b12278a51586edf3aa823dc07cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
