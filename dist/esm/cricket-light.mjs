export const name="cricket-light";
export const id="dl_9c89764ae32d448dbbd1";
export const url=new URL("../icons/cricket-light.svg?v=e298017e9a58b05cfadc30b81f09bc58d57da480b42d7fb5ef9b68463c34e9ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
