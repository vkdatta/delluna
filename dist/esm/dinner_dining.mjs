export const name="dinner_dining";
export const id="dl_75bad6470d27d8a66b83";
export const url=new URL("../icons/dinner_dining.svg?v=1ba0e85456a24e720d885a659cb0f07b26501473b25cb8c7c12e855886b475dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
