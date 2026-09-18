export const name="dermatology";
export const id="dl_d6be37210a0d48a8b8af";
export const url=new URL("../icons/dermatology.svg?v=edfde93c3b58d16fb78e2c4d4333ce22b01ab13b06b1954d7ec90b8f788a3de4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
