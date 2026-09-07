export const name="tornado-thin";
export const id="dl_6b96d07cb34b4f7a8b9d";
export const url=new URL("../icons/T/tornado-thin.svg?v=5ac3bd645f0d97eaf5b971750377da4dd569f7a5ce4e46daba1be0d8af2d2a3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
