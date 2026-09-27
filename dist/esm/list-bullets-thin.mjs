export const name="list-bullets-thin";
export const id="dl_659b815808d5414388f0";
export const url=new URL("../icons/list-bullets-thin.svg?v=a5f0bbe1c5f62cfed2849d79dd40efff2fdb8feb45fe5ea0f2097611f4d33b91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
