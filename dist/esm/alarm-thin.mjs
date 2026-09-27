export const name="alarm-thin";
export const id="dl_981b92b68ca044b09534";
export const url=new URL("../icons/alarm-thin.svg?v=0795ee284f21fad5bdff20a318be6ce5cc583618aa23cb7c4e0a956bf36ac2e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
