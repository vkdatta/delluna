export const name="number-circle-eight-bold";
export const id="dl_3bb8cf6a2bcc4b769109";
export const url=new URL("../icons/number-circle-eight-bold.svg?v=686fb1424aa6d26a971ae4b37b0aa650d0c15c82e113f0a956d59c4a1206e73f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
