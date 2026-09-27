export const name="boot-bold";
export const id="dl_95eb308cbd9d4c79b03f";
export const url=new URL("../icons/boot-bold.svg?v=39ac63aea7fd887e57537c97fe23c35c965ec04ec0eb3954212cc84e885a3955",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
