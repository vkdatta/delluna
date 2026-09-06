export const name="house-line-thin";
export const id="dl_3d024e5e9f234354a3c8";
export const url=new URL("../icons/house-line-thin.svg?v=22f381cf8aedb2b987db9f394fee2ee483696ee379e579fff632f3f8eabce04a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
