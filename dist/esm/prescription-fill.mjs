export const name="prescription-fill";
export const id="dl_87359fa667de4eb69e95";
export const url=new URL("../icons/prescription-fill.svg?v=600a811b0d6bb850ec16ad18c4f03b8c1b3be0a88159fb821cc663bfbf986cd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
