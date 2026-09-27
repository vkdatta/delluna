export const name="lucid_3-message-square-text";
export const id="dl_ed0bf7c05b22459fa05e";
export const url=new URL("../icons/lucid_3-message-square-text.svg?v=4bf6126b38063ecb27d11d71a3a35a1634b9ec1b4cf0750486074cb576aa4fe0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
