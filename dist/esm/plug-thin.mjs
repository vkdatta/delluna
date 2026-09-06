export const name="plug-thin";
export const id="dl_af88995218184b6cacca";
export const url=new URL("../icons/plug-thin.svg?v=0c4c8fe64f11a52692b1ab0064b6da39dc7ece40187af9780e3c1527a8190c62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
