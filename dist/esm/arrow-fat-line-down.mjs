export const name="arrow-fat-line-down";
export const id="dl_0768feb2ea8d4f8aa288";
export const url=new URL("../icons/arrow-fat-line-down.svg?v=19b97e00d8686bb102ba5464f91fa76f2ce4c753906665d645200658da1dd4b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
