export const name="scissors-bold";
export const id="dl_0c594ffc6f53897306d7";
export const url=new URL("../icons/scissors-bold.svg?v=6b1b59ab86cb0f893522ed5a88bcca6f615d72d9fd406419dfdd7116ec9b1fb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
