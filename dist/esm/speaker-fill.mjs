export const name="speaker-fill";
export const id="dl_6174995298e97a51d70d";
export const url=new URL("../icons/speaker-fill.svg?v=d5a1cde7e53eb8d2520f744da793f06475ce368935a96f2a7115c9f4d07b83fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
