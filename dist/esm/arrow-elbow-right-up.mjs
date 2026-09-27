export const name="arrow-elbow-right-up";
export const id="dl_badb54b4c740421eb70b";
export const url=new URL("../icons/arrow-elbow-right-up.svg?v=45ea533bf3b67f1078f1073f96d1b5f4772fe2805a8a096b73d12b0c1e87e858",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
