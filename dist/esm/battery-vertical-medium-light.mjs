export const name="battery-vertical-medium-light";
export const id="dl_0a2f4670b29244678674";
export const url=new URL("../icons/battery-vertical-medium-light.svg?v=27ae4d2ed155be1a25b805a32e92e3482feb3aa68efe562fd40eaca519128df7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
