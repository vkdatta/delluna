export const name="more-fill";
export const id="dl_6271257d8ec40516e6b9";
export const url=new URL("../icons/more-fill.svg?v=8abff36a8fb7473900542cf88c3cb23eabc61d4055cde1e5370734811199493c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
