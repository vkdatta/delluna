export const name="star-half";
export const id="dl_fad2c7f6df734121b560";
export const url=new URL("../icons/S/star-half.svg?v=4a2ba71a7b39c266941c7dfce21599acdcd7d7bb989d879da6beaa8185415580",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
