export const name="door-thin";
export const id="dl_ab51fb2bbc6f4bbebc2a";
export const url=new URL("../icons/door-thin.svg?v=05d1398af7601b4e575ef57c047390fcca193759d6cc4380d099c537dea5b794",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
