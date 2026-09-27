export const name="lucid_3-mic-off";
export const id="dl_5d211a81cb3248afa3c2";
export const url=new URL("../icons/lucid_3-mic-off.svg?v=a645b5df6909f05e437cb5c7dcd3a0e8dbf3eb5795d498c182777bee674882df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
