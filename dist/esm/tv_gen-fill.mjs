export const name="tv_gen-fill";
export const id="dl_9e640e98d930441d4abc";
export const url=new URL("../icons/tv_gen-fill.svg?v=48f77aa3ea3c9ccba36cc1689677019026abb3c8036275258a7bf79aecbba938",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
