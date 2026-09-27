export const name="humerus_alt";
export const id="dl_03af96cb481a8f17aae7";
export const url=new URL("../icons/humerus_alt.svg?v=27ff753b08fa8a1f872b58d08da747a61f151f5312aa504c91f4557c81f8af1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
