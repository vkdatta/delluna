export const name="door-light";
export const id="dl_af9196dcec504868b54d";
export const url=new URL("../icons/door-light.svg?v=94b878aef63dc65803507d110063e4baab9591465fd61f09c4f8240d1e19f437",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
