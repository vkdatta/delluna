export const name="hospital-thin";
export const id="dl_7c097aa96e404d508708";
export const url=new URL("../icons/hospital-thin.svg?v=212ed7dd7641102c5b0658e32b0f7283bddae6c7d08ac6d01c6f6f3687b57d7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
