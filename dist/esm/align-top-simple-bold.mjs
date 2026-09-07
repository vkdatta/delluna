export const name="align-top-simple-bold";
export const id="dl_007668d6eedb4552af9c";
export const url=new URL("../icons/align-top-simple-bold.svg?v=596fa52ef2174c1e65ba018f6cbece14aea5a064fe80a210cb09115f2f831202",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
