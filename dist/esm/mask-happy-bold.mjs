export const name="mask-happy-bold";
export const id="dl_8ce250383cb04684ae42";
export const url=new URL("../icons/mask-happy-bold.svg?v=d146208874016365af798d1896b6e7efe488831661490fd84a63c976b8d2121d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
