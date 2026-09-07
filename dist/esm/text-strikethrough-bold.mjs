export const name="text-strikethrough-bold";
export const id="dl_10d65d834c434268988a";
export const url=new URL("../icons/T/text-strikethrough-bold.svg?v=5d038bffad3817c57c938db2bb2df9dabd6532469a986dd4415a0d99054697a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
