export const name="air-traffic-control-bold";
export const id="dl_1fa8cb41aa8c43b5bc80";
export const url=new URL("../icons/air-traffic-control-bold.svg?v=7f3934f13b98c35b93481d90030acce8a4b8e218e75c857898729cd09b058cfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
