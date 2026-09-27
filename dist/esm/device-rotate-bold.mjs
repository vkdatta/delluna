export const name="device-rotate-bold";
export const id="dl_de54e406bd184541b1a6";
export const url=new URL("../icons/device-rotate-bold.svg?v=aa1be6f6994ba91f662936592a99ce4e9fc29d3c7550a78bb20ec0ffd991668d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
