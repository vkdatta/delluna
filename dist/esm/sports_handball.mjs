export const name="sports_handball";
export const id="dl_9ded82c2b98acf3b097e";
export const url=new URL("../icons/sports_handball.svg?v=dd490f7a79a9feebff1ef480133c51152113922d528e16a1732e2be1890f1553",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
