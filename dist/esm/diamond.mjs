export const name="diamond";
export const id="dl_74f5c7bab0d74f6e80a0";
export const url=new URL("../icons/diamond.svg?v=7f9ebf5bb51a955c248da77b9b8a50226a7ecd81706b59e78233d7ad2a9d9d45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
