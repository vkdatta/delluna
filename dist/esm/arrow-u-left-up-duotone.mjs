export const name="arrow-u-left-up-duotone";
export const id="dl_c92d02a73150426cbedc";
export const url=new URL("../icons/arrow-u-left-up-duotone.svg?v=c471e54d3cfa00e3622c3e5c151fe0af3915b7c2397d5819526d90bcd9b05203",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
