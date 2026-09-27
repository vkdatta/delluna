export const name="text-t-slash-bold";
export const id="dl_fb1159fad3c6ff8284b8";
export const url=new URL("../icons/text-t-slash-bold.svg?v=e0991815b9bc2e2cba8d20fc28107191234a8d81f53f09c278d5c01711189f08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
