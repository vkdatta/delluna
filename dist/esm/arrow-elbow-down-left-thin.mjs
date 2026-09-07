export const name="arrow-elbow-down-left-thin";
export const id="dl_3f6273d0f22d46d796cb";
export const url=new URL("../icons/arrow-elbow-down-left-thin.svg?v=b3cf5c1528d2b4517d8692713ff63b67f16f7bba14f9c4c02ac94e4d8a2b7a5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
