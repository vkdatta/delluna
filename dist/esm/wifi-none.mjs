export const name="wifi-none";
export const id="dl_054a31d671b449849f9a";
export const url=new URL("../icons/W/wifi-none.svg?v=78ba862e6be9e34f7760b42eb23eae3bc003db95fc38511b76b2aad59cec861d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
