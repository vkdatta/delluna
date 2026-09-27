export const name="arrow-elbow-down-left-thin";
export const id="dl_3f6273d0f22d46d796cb";
export const url=new URL("../icons/arrow-elbow-down-left-thin.svg?v=85dfb994d6ee4e1d828c060da5dba44184e4e56bf2f99f33c53647b488c1bc9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
