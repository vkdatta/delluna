export const name="http";
export const id="dl_399f2d50b8dd4eebb29a";
export const url=new URL("../icons/H/http.svg?v=8a8cdf25b2df18533188a988f92cbf76336628125ac2cce6174c2060e071afc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
