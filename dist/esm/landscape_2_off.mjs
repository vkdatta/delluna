export const name="landscape_2_off";
export const id="dl_f803826d6bb000c2de34";
export const url=new URL("../icons/landscape_2_off.svg?v=70f24060a7c34045682d8087d66c39b3e4ba4b0534d123a6eb70447c10ff7032",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
