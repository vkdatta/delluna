export const name="star";
export const id="dl_3eea1d58292990eebbc6";
export const url=new URL("../icons/star.svg?v=8fb32176ecb5774b6da8ac928bcbac971c3056ba8f2db6c16374c77f48e0b555",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
