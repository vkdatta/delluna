export const name="greater-than-thin";
export const id="dl_3ae3dcc3f92a418fb68d";
export const url=new URL("../icons/greater-than-thin.svg?v=113aa0b11e5df397501af8ee5892c7d28e9d92b856f57b7412980676ed99b74c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
