export const name="arrow-line-up-right";
export const id="dl_737b821e43174a9a91be";
export const url=new URL("../icons/arrow-line-up-right.svg?v=520c7804d72cfae21903d476448f16d4514822f334ebf35183d686fea9ddd31d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
