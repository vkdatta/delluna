export const name="lucid_3-message-square-text";
export const id="dl_ed0bf7c05b22459fa05e";
export const url=new URL("../icons/lucid_3-message-square-text.svg?v=4b7af3b1c56d566ec3cb6444fc4d154c8db7ef609bf3caafb5ec1591610f388d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
