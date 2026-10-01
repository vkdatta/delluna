export const name="tornado-thin";
export const id="dl_8f0dc19c227c556f87f7";
export const url=new URL("../icons/tornado-thin.svg?v=5ac3bd645f0d97eaf5b971750377da4dd569f7a5ce4e46daba1be0d8af2d2a3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
