export const name="total_dissolved_solids-fill";
export const id="dl_cbd19952fd908217469e";
export const url=new URL("../icons/total_dissolved_solids-fill.svg?v=d0dc59377fb2accb8abcf34bfc34134603859a6e5f7478b204552a97564e4018",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
