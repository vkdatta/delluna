export const name="text-underline-light";
export const id="dl_9386a04c1ab7eadad0e9";
export const url=new URL("../icons/text-underline-light.svg?v=fe2a83591a90deaa55b85f082629822a4912f837e194f48b15c0d988907c376d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
