export const name="person-simple-throw-thin";
export const id="dl_0f5bf11a22804896b3a9";
export const url=new URL("../icons/person-simple-throw-thin.svg?v=ab687daf6cc64c601b575a662c17f3d4eccc05c9b6eb5905aa5c7893b70d9967",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
