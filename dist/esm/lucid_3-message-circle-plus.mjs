export const name="lucid_3-message-circle-plus";
export const id="dl_39f9f84326994cb7bddb";
export const url=new URL("../icons/lucid_3-message-circle-plus.svg?v=5f4e7c73fd0ddeb67220483ecb9bddf785fef5ba8007d271c5a2de8f517d4886",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
