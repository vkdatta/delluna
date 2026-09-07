export const name="user-circle";
export const id="dl_e256bc12d5e64e959129";
export const url=new URL("../icons/U/user-circle.svg?v=5aee25838c1915058940900df322afc36b76f4ea7e48499c33603cf121258b2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
