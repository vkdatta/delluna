export const name="hand-soap";
export const id="dl_2956835b6db54683b3e1";
export const url=new URL("../icons/hand-soap.svg?v=a575c9d9ab2399406a2bccd4ac41dca20a1f684d09daad07723e5dc74fadb4fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
