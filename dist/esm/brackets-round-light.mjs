export const name="brackets-round-light";
export const id="dl_b27f1d56d6324e8ab335";
export const url=new URL("../icons/brackets-round-light.svg?v=5acc2e702c8125dfcababd2908aeb0c29b6aa0cfba22a17dd78d87b5bbfae3e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
