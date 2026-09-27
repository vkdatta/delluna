export const name="check-square-offset";
export const id="dl_0c529e852e5047dba609";
export const url=new URL("../icons/check-square-offset.svg?v=d94ca11bbbea7703647533a3084bae20d72c08317079ecb26d02ea6be43ea884",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
