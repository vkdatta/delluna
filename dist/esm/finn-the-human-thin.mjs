export const name="finn-the-human-thin";
export const id="dl_efcdad03fa9a4cd688c0";
export const url=new URL("../icons/finn-the-human-thin.svg?v=4e30bed6f2a9827bc53dd58704f928eebbf485063a6bda666bb12b12026a31d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
