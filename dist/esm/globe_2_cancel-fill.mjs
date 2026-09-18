export const name="globe_2_cancel-fill";
export const id="dl_48e08da8a83a435a87a3";
export const url=new URL("../icons/G/globe_2_cancel-fill.svg?v=acf2975477815dd93c84e1acffa308f1ff97e831f21d7469c5882ad70774d003",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
