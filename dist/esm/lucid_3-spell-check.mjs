export const name="lucid_3-spell-check";
export const id="dl_ea6fec624314414d87c8";
export const url=new URL("../icons/lucid_3-spell-check.svg?v=a8eef9d84b72a1fce9f697de9ad3a1bcff2bf35755433c36335025dfa82cd91c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
