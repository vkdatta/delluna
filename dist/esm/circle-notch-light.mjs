export const name="circle-notch-light";
export const id="dl_3f208599b89c4107bbe7";
export const url=new URL("../icons/circle-notch-light.svg?v=0e5b2b271d8a59d6241783a0c9bbc76051727340c8efe5c1cf8d8b7ed2c965ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
