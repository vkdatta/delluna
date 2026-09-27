export const name="moon-fill";
export const id="dl_6fd2e897240d44fc9294";
export const url=new URL("../icons/moon-fill.svg?v=7067597cc31be93f94afd710d11ede28cb35dcfc4f0eb4c80cd14c7e9d9419ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
