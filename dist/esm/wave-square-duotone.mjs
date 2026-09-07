export const name="wave-square-duotone";
export const id="dl_e7bfba4bc70143228d94";
export const url=new URL("../icons/W/wave-square-duotone.svg?v=6224522b879d9e7b1e1e1d4ab82cfd599cae7174152d86231ce6050ae7bc4617",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
