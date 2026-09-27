export const name="lucid_1-arrow-down";
export const id="dl_df11064ebc1c49888595";
export const url=new URL("../icons/lucid_1-arrow-down.svg?v=203a01db393411f153d44428fdad53438b61f72c1d71f907c2273ee7ea372bef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
