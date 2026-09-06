export const name="lucid_3-paint-bucket";
export const id="dl_af9c4b62b462423b8feb";
export const url=new URL("../icons/lucid_3-paint-bucket.svg?v=b41f96575d1075ec9d320c0ec8380babdb8cf08d4c84d065bccea9b12abb9284",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
