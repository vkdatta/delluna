export const name="smiley";
export const id="dl_cec8547b9feb45a5aeab";
export const url=new URL("../icons/S/smiley.svg?v=9486a397f921e6a6472ae4655002a468b9d4475d1ff44dc639aa95fd830b7d60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
