export const name="number-two-duotone";
export const id="dl_6e564802dff24fceb1c4";
export const url=new URL("../icons/number-two-duotone.svg?v=880503c5bd8c3ed8feddc6f2d976f9ba0282c5983cbe9a3f5cb872bee49caea4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
