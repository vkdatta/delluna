export const name="rocket-bold";
export const id="dl_2993f2e0f515442dbce8";
export const url=new URL("../icons/rocket-bold.svg?v=ea6e94e9278173177f5e2ab0186e913978f2316067eaf39213f3678e3f485fb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
