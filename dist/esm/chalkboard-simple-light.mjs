export const name="chalkboard-simple-light";
export const id="dl_1bd181816b0b44a0b32d";
export const url=new URL("../icons/chalkboard-simple-light.svg?v=e7d0c76252f5d791ed7f34aff30bf60b4740da64104c9922fff5c60c26e1eb0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
