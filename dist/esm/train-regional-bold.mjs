export const name="train-regional-bold";
export const id="dl_4047f23ccf5f86a940c4";
export const url=new URL("../icons/train-regional-bold.svg?v=72c28d8907d6287ddd5263e09d2ac8250c084f0b3bbdc7c02eb7fa9772dfe3c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
