export const name="arrow-square-down-right";
export const id="dl_e2c5efd46fc6454592f6";
export const url=new URL("../icons/arrow-square-down-right.svg?v=e3220020cb6b0d15661af76b50f37b5360ef90b4df92dc0837ea43149d17ba23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
