export const name="fingerprint-thin";
export const id="dl_75fe54069b414b908bef";
export const url=new URL("../icons/fingerprint-thin.svg?v=9e05ec2ab5d4b14c2ce84d8b6f7c79dfbc67e9f1bb68c4f29a9d884eae69b4d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
