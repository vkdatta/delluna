export const name="lock-key-open-light";
export const id="dl_7625689f15294105ab2e";
export const url=new URL("../icons/lock-key-open-light.svg?v=398984a923be0c3fbea9af759172fdd05ac510675f03ca291d62fd8e40c3bdfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
