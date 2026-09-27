export const name="hourglass-simple-bold";
export const id="dl_2aab7d8c8c7a4de296e7";
export const url=new URL("../icons/hourglass-simple-bold.svg?v=14bfac13185a57b42cef75641f383326bf3bf1fb6c16c1ba0b7e8563e1061a01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
