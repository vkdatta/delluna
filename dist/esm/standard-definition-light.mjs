export const name="standard-definition-light";
export const id="dl_2dcb04b593bf4feaa34a";
export const url=new URL("../icons/S/standard-definition-light.svg?v=2b1a46b83e1a3c9217d1544ecce8dd92f9f63dfa0782f62fc833d8508d8f4437",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
