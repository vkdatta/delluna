export const name="next_week";
export const id="dl_4170594aeb9446edb1f9";
export const url=new URL("../icons/next_week.svg?v=16de792e812c9704f040f8f699bfbabfae2f7737de85b1f50ba928eda0af26ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
