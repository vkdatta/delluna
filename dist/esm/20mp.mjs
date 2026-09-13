export const name="20mp";
export const id="dl_8843d0604a064e92b755";
export const url=new URL("../icons/2/20mp.svg?v=ff7ac8c388df4a222bdb72fedd2beb0dc20e81a026a0702adc11af7799b7c182",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
