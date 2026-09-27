export const name="number-square-nine-thin";
export const id="dl_0ed2ad49f2904ef09691";
export const url=new URL("../icons/number-square-nine-thin.svg?v=9f37aa9ba74fd2beabf42e3c0da1542cf2b0879cff8f3bacc435a18312abccf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
