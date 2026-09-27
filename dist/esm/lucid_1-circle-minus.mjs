export const name="lucid_1-circle-minus";
export const id="dl_1fd9f882658b4cc9a590";
export const url=new URL("../icons/lucid_1-circle-minus.svg?v=87de85016b02c3c5e1b6d9a986b05286d4c4e5d05bcfb51d83f7ed4c9cfe7b6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
