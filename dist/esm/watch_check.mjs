export const name="watch_check";
export const id="dl_eb24264dbb4507a55163";
export const url=new URL("../icons/watch_check.svg?v=b6aeae017829bb7588b9307986c98bcd2fb98b1628da6dea25cb16d5660886e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
