export const name="trademark-thin";
export const id="dl_04fd4191660b4d5e8823";
export const url=new URL("../icons/T/trademark-thin.svg?v=7682ac4ce5f8731eb0137d8a85f5f3eca62b80804817ba468ad1285adda8dfd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
