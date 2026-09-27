export const name="carry_on_bag_question-fill";
export const id="dl_a4164320fadcb2ccbe35";
export const url=new URL("../icons/carry_on_bag_question-fill.svg?v=56c14a2906ce41de7a7b3d80ac1c3a629e2c1269e8163c7fc529c7aa5544ee93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
