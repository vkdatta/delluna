export const name="baby-carriage-duotone";
export const id="dl_1191d3caadc74828b04b";
export const url=new URL("../icons/baby-carriage-duotone.svg?v=b3705d4d7e87899e8495e976c7c4225767e4b46695c0c7dee865a49b3504e04f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
