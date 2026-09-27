export const name="drop-simple-bold";
export const id="dl_0d3f15e4314f4970af7d";
export const url=new URL("../icons/drop-simple-bold.svg?v=55f3f1bd5ed261f260b1df754bec892a936b9530a0a83576efe3324d16097ac5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
