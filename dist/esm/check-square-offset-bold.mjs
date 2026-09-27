export const name="check-square-offset-bold";
export const id="dl_3851f13073794a4dbd09";
export const url=new URL("../icons/check-square-offset-bold.svg?v=f9b071cdeff44efa4ca31452a99d61f591ca595bfb360f86fb7f6a139c67b84d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
