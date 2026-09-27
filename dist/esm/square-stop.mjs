export const name="square-stop";
export const id="dl_492f6cdda30d475aa15a";
export const url=new URL("../icons/square-stop.svg?v=732e81270c6824a9f30ac695d6a2c9637ca15e61d9f072ccc9c78fa40fb69529",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
