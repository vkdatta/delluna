export const name="elevator-thin";
export const id="dl_2f5494bd0fd249a7a9fc";
export const url=new URL("../icons/elevator-thin.svg?v=0478c14a940db57adc0cf2981fe3b173032997263c4db45d746277513e20537d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
