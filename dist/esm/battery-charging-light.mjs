export const name="battery-charging-light";
export const id="dl_b3bc2486b3674648b122";
export const url=new URL("../icons/battery-charging-light.svg?v=23a70c20af9c36e0800d0b374dff6e67e9f5b610ada70ca86d1f6d7852d2eb2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
