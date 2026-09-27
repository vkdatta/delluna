export const name="cloud-slash-bold";
export const id="dl_ec16ad3f77324a718356";
export const url=new URL("../icons/cloud-slash-bold.svg?v=c69b6452e55e596d7b7db9f591fc619264107183d3a65c7cdec64f45d81333c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
