export const name="warehouse-thin";
export const id="dl_5e7fb999d8d7fc84f0b6";
export const url=new URL("../icons/warehouse-thin.svg?v=d308eb641f9110b36f15171b9da4c6e085d0bb0f0b3f3bb3c0b82866a57f4b2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
