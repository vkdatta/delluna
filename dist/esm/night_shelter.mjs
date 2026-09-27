export const name="night_shelter";
export const id="dl_c98853b789f03cdfec0a";
export const url=new URL("../icons/night_shelter.svg?v=dc561f89d4901ba222836e38c87d02b81857be82783558085beee38b6fa0626f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
